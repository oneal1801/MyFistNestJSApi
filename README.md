# **Micro-task-management-backend**

## **Table of Content**
<!-- La tabla de contenido se genera de forma automática utilizando la extensión de visual studio code Markdown All in One (yzhang.markdown-all-in-one). -->

- [**Micro-task-management-backend**](#micro-task-management-backend)
  - [**Specifications**](#specifications)
  - [**Installation**](#installation)
    - [**Environment Variables**](#environment-Variables)
  - [**Contribution**](#contribution)
## **Specifications**
<!-- Información técnica del microservicio tales como librerías/paquetes del que depende, tecnologías utilizadas, frameworks, entre otros de la misma índole. -->
### Used technology

* [NestJs](https://nestjs.com/) 
* [Redis](https://redis.io/)
* [Jest](https://jestjs.io/)
* [TypeScript](https://www.typescriptlang.org/)
* [Visual Studio Code IDE](https://code.visualstudio.com/)
* [GIT](https://git-scm.com/)
* [Docker](https://www.docker.com/)
* [TYPEORM](https://typeorm.com/)
* [MongoDB]
* [PostGress]

## **Installation**

```bash
1. $ npm install
```
2. run the following script: 
    `docker run --name mongodb -e MONGO_INITDB_ROOT_USERNAME=[USUARIO] -e MONGO_INITDB_ROOT_PASSWORD=[CLAVE] -p 3033:27017 -d mongo --replSet mongodb-replica-set`  
  1. configure your user name and password. 

3. run the following script: 
    `docker run --name redis-store -p 3032:6379 -d redis redis-server --appendonly yes`



## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - =Winsmer Oneal Marte

## License

Nest is [MIT licensed](LICENSE).

### **Environment Variables**

List of environment variables used in the microservice:

|variable|Type|Comment|
|-|-|-|
|PORT|number|Environment variable to specify the port|
|DATABASE_HOST|string|Environment variable to specify database host|
|DATABASE_PORT|number|Environment variable to specify the database port|
|DATABASE_USERNAME|string|Environment variable to specify the database user|
|DATABASE_PASSWORD|string|Environment variable to specify the database password|
|DATABASE_NAME|string|Environment variable to specify the database name|
|HTTP_TIMEOUT|number|Environment variable to specify the timeout on an HTTP request|
|HTTP_MAX_REDIRECTS|number|Environment variable for the maximum number of HTTP redirects per request.|
|CACHE_HOST|string|Environment variable to specify the Redis HOST|
|CACHE_PORT|number|Environment variable to specify the Redis port|
|CACHE_PASSWORD|string|Environment variable to specify the password of the Redis user|
|CACHE_REDIS_DATABASE_NUMBER|number|Environment variable to specify the Redis database name|
|CACHE_TTL|number|Environment variable to specify how long redis keys last|
|APP_NAME|string|Environment variable to specify the name of the microservice|
|APP_VERSION|number|Environment variable to specify the version of the microservice|
|APP_DESCRIPTION|number|Environment variable to specify a description of the microservice|

## **contributions**

See [contribución](./CONTRIBUTING.md)