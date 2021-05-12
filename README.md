# abby-sso

## 为什么使用nestjs？
写大型可扩展的nodejs应用，如果没有好的结构和代码组织策略，最终会导致项目的毁灭。
nest的主要目标是给后端开发者一个模块化的code结构和TS体验，来帮助构建和维护大型的
企业级的nodejs APP，而没有任何的严重问题。
## Description

 
## Installation

```bash
$ npm install
```

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

## Init db
yarn run:services
docker exec -it sso_db bash
psql -U sso_db #postgres

``` bash
\c sso_db
\? list all the commands
\l list databases
\conninfo display information about current connection
\c [DBNAME] connect to new database, e.g., \c template1
\dt list tables of the public schema
\dt <schema-name>.* list tables of certain schema, e.g., \dt public.*
\dt *.* list tables of all schemas
\du
Then you can run SQL statements, e.g., SELECT * FROM my_table;(Note: a statement must be terminated with semicolon ;)
\q quit psql
```
docker volume ls
docker volume rm <volume_name>
docker volume remove $(docker volume ls -q)
find . -name '*.log' -delete




https://juejin.cn/post/6844904096017678343
https://www.codemag.com/Article/1907081/Nest.js-Step-by-Step
http://www.sqlines.com/online
https://www.codemag.com/Article/1909081/Nest.js-Step-by-Step-Part-2
https://github1s.com/bhaidar/nestjs-todo-app/blob/master/server/src/main.ts
https://docs.tibco.com/pub/mash-local/4.1.1/doc/html/docker/GUID-BD850566-5B79-4915-987E-430FC38DAAE4.html
https://github.com/Radu-Raicea/Dockerized-Flask/wiki/%5BDocker%5D-Remove-all-Docker-volumes-to-delete-the-database

https://wanago.io/2020/05/18/api-nestjs-postgresql-typeorm/