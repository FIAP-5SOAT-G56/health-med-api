# Health Med REST API
![typescript](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)
![Node 20.10](https://shields.io/badge/Node-20.10.0-339933?logo=Node.js&logoColor=FFF&style=flat-square)
![nestjs](https://shields.io/badge/NestJS-E0234E?logo=NestJS&logoColor=FFF&style=flat-square)
![mysql](https://shields.io/badge/MySQL-4479A1?logo=MySQL&logoColor=FFF&style=flat-square)
![redis](https://shields.io/badge/Redis-DC382D?logo=Redis&logoColor=FFF&style=flat-square)
![docker](https://shields.io/badge/Docker-2496ED?logo=Docker&logoColor=FFF&style=flat-square)
![swagger](https://shields.io/badge/Swagger-85EA2D?logo=Swagger&logoColor=FFF&style=flat-square)
![make](https://shields.io/badge/Make-00CC00?logo=Make&logoColor=FFF&style=flat-square)
![jest](https://shields.io/badge/Jest-C21325?logo=Jest&logoColor=FFF&style=flat-square)
![eslint](https://shields.io/badge/ESLint-4B32C3?logo=ESLint&logoColor=FFF&style=flat-square)
![editorconfig](https://shields.io/badge/EditorConfig-000000?logo=EditorConfig&logoColor=FFF&style=flat-square)
![typeorm](https://shields.io/badge/TypeORM-F37626?logo=TypeORM&logoColor=FFF&style=flat-square)

This project is part of a medical appointment scheduling system, proposed in a Hackathon for the Software Architecture Postgraduate Course at FIAP.

For this project, we utilized the [TypeScript](https://www.typescriptlang.org/) programming language with [Node.js](https://nodejs.org/) and the [Nest.js](https://nestjs.com/) framework. The database management includes [MySQL 5.7](https://www.mysql.com/) to handle information related to Consumidor, Produto, and Pedido. Additionally, an in-memory [Redis](https://redis.io/) database is employed for caching.

To build the API documentation, we've used [Swagger](https://swagger.io/) tool integrated with Nest.js, accessible through the endpoint: {health_med_api}/docs

## Workspace Dependencies
- [Node 20.10](https://nodejs.org/)
- [Docker](https://www.docker.com/get-started/)
- Make
  - [Windows](https://gnuwin32.sourceforge.net/packages/make.htm)
  - Linux
  ```bash
  sudo apt update
  sudo apt install make
  ```

## Project Dependencies
Install project dependencies with:
```bash
pnpm install
```



## Start Project using Docker
Configure all docker containers and volumes and start the application
```bash
make setup

# or try without make

docker network create -d bridge local-network
cp .env.example .env
cp .env.local.test.example .env.test
docker compose build --progress=plain
docker compose up
docker compose exec -it irango-order-api pnpm migration:run
docker compose exec -it irango-order-api pnpm seed:run
```

## Start project using npm
Watch mode:
```bash
pnpm start:dev
```

Compiled mode:
```bash
pnpm build
pnpm start
```

Migrations and Seeds:
```bash
pnpm migration:run
pnpm seed:run
```

## How to Use
We developed a seed to populate database with some products and one Consumidor with CPF `123.456.789-00`. You can use it or create a new Consumidor.

## Endpoints
We developed few endpoints which can be found in [consumidores.controller.ts](./src/adapter/driver/nestjs/consumidores/consumidores.controller.ts), [produtos.controller.ts](./src/adapter/driver/nestjs/produtos/produtos.controller.ts) and [pedidos.controller.ts](./src/adapter/driver/nestjs/pedidos/pedidos.controller.ts) files

## Business Requirements:
1. Cadastro de Usuario
> POST {health_med_api}/v1/users
2. Identificação do Cliente via CPF
> POST {health_med_api}/v1/users/login
3. Criar médico
> POST {health_med_api}/v1/doctors



## Automated Tests
### Unit Tests
```bash
pnpm test:unit
```

### Test Coverage
```bash
pnpm test:coverage
```

### Integration Tests
```bash
pnpm test:integration
```

### BDD Tests
```bash
pnpm test:bdd:local
```

## Make commands
### Using Docker
- Setup Project: `make setup`. This command will create docker network, containers and volumes. It will also start the project and show its logs.
- Start Project: `make up`
- Stop Projects: `make down`
- Show logs: `make logs`
- Add Migration: `make migration.generate name=MigrationName`
- Run Migrations: `make migration.run`
- Add Seed: `make seed.generate name=SeedName`
- Run Seeds: `make seed.run`
- Access container bash: `make bash`
- Access Redis container: `make redis`
