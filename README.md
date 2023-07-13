## Description

Microservices with [NestJS](https://github.com/nestjs/nest) using [gRPC](https://grpc.io/).

NestJS micoservices using grpc to communicate from http endpoint to book and user microservice as well as communication between the services.
proto folder holds both book and user proto file needed for gRPC.

## Installation

```bash
$ cd book-service
$ yarn install
```

```bash
$ cd user-service
$ yarn install
```

```bash
$ cd http-api
$ yarn install
```

## Running the app

```bash
$ cd book-service
$ yarn run start:dev
```

```bash
$ cd user-service
$ yarn run start:dev
```

```bash
$ cd http-api
$ yarn run start:dev
```

Verify by calling the below API.

```sh
127.0.0.1:3000/protobooks
```
