# Running instructions

**Prerequisites**: NodeJS, Docker

* open terminal
* clone this repository `git clone https://github.com/EricDosReis/go-barber-api.git`
* go to project folder `cd go-barber-api`
* install dependencies `yarn install`
* run docker container with Postgres `docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres`
* create database with name `gobarber`
* run database migrations `yarn sequelize db:migrate`
* run `yarn dev`
