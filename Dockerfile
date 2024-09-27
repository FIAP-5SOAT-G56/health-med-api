FROM node:20.10.0-slim

# Enviroment
ARG BUILD_ENV
ENV NODE_ENV=${BUILD_ENV}
ENV TZ=GMT

# Workdir
WORKDIR /app

# Install Deps
RUN \
  apt-get update && \
  apt-get install curl -y && \
  apt-get -y install procps

# Timezone
RUN ln -snf "/usr/share/zoneinfo/${TZ}" "/etc/localtime"
RUN echo "${TZ}" > "/etc/timezone"
RUN dpkg-reconfigure -f noninteractive tzdata

#  - - - - - - - - - - This quick hack invalidates the cache - - - - - - - - - - 
ADD https://www.google.com /time.now

# Install
COPY ./package*.json ./
RUN npm ci --include=dev --ignore-scripts

# Build the application
COPY ./ ./
RUN npm run build

COPY ./scripts/start.sh /scripts/start.sh
RUN ["chmod", "+x", "/scripts/start.sh"]
ENTRYPOINT ["/scripts/start.sh"]