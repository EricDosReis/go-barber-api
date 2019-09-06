# Running instructions

**Prerequisites**: NodeJS, Docker

* open terminal
* clone this repository `git clone https://github.com/EricDosReis/go-barber-api.git`
* go to project folder `cd go-barber-api`
* install dependencies `yarn install`
* run docker container with MongoDB `docker run --name mongobarber -p 27017:27017 -d -t mongo`
* run docker container with Redis `docker run --name redisbarber -p 6379:6379 -d -t redis:alpine`
* run docker container with Postgres `docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres`
* create database with name `gobarber`
* run database migrations `yarn sequelize db:migrate`
* run dev `yarn dev`
* start queue `yarn queue`
