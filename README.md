# Description

Initial setup for backend server.

## Features n Techs

 * Dockerized environments (Node.js server + Mongo database).
 * Express for handle rest routes.
 * Mongoose ODM for build NoSQL queries.
 * Hexagonal Architecture.
 * SOLID principles.

### Requirements
  * Node (16.15.1 or LTS)
  * NPM
  * Docker
  * Docker Compose v2

## Starting Setup

Install packages:
```shell
    $ npm i
```

Build docker images:
```shell
    $ npm run build
```

Run Application (start Node.js and Mongo servers):
```shell
    $ npm run server:up
```

End Application:
```shell
    $ npm run server:down
```




