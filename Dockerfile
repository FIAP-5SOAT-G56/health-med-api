#-------------------------------------------------------
# Prepare a package.json forcing "version" to be "0.0.0"
# thus we don't loose docker layers cache when we only
# change the "version" key of the package.json file.
#-------------------------------------------------------
FROM node:20.10-alpine AS package_version
COPY package.json /deps/original-package.json
RUN sed -e 's/"version": "[0-9]\+\.[0-9]\+\.[0-9]\+",/"version": "0.0.0",/' < /deps/original-package.json > /deps/package.json

# Enviroment
ARG BUILD_ENV
ENV NODE_ENV=${BUILD_ENV}
ENV TZ=GMT

#-------------------------------------------------------
# Install full dependencies for development and building
#-------------------------------------------------------
FROM node:20.5-alpine AS build_dependencies
RUN apk add --no-cache make
RUN apk add --no-cache git
RUN apk add --no-cache curl
RUN npm i -g "@nestjs/cli@^10.0.0"
RUN npm install -g pnpm
WORKDIR /app
COPY --from=package_version /deps/package.json ./
COPY ./pnpm-lock.yaml ./
RUN pnpm install


# # Timezone
# RUN ln -snf "/usr/share/zoneinfo/${TZ}" "/etc/localtime"
# RUN echo "${TZ}" > "/etc/timezone"
# RUN dpkg-reconfigure -f noninteractive tzdata
# #  - - - - - - - - - - This quick hack invalidates the cache - - - - - - - - - - 
# ADD https://www.google.com /time.now

#-----------------------------------
# Run development with all the tools
#-----------------------------------
FROM build_dependencies AS development
COPY . .
CMD ["pnpm", "run", "start"]

#--------------
# Build project
#--------------
FROM build_dependencies AS builder
COPY . .
RUN pnpm build
# Installing with this NODE_ENV makes a difference!
ENV NODE_ENV production
# Remove the packages specified in devDependencies.
RUN pnpm prune --prod --config.ignore-scripts=true
RUN curl -sf https://gobinaries.com/tj/node-prune | sh && node-prune


#----------------------------------
# Run production in a cleaner image
#----------------------------------
FROM node:20.5-alpine AS production
RUN apk add --no-cache make
# Allow to run on port 80 as a non-root user
RUN apk add --no-cache libcap && setcap cap_net_bind_service=+ep /usr/local/bin/node
USER node
WORKDIR /app
COPY --from=builder --chown=node:node /app/node_modules /app/node_modules
# COPY --from=builder --chown=node:node /app/makefile /app/makefile
COPY --from=builder --chown=node:node /app/dist /app/dist
COPY --from=builder --chown=node:node /app/package.json /app/package.json
CMD ["npm", "run", "start:prod"]
