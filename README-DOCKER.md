# Installation with Docker

## Requirements

You will need :
  - [Docker](https://docs.docker.com/engine/installation/)
  - [Docker-Compose](https://docs.docker.com/compose/install/#install-compose) 

## Get started

### Get the containers ready

The following command will:
  - Build the images
  - (Re)creates the containers
  - Start the containers

```bash
$ docker-compose up
```
You can now see an aggregation of the output of each container in foreground.

If you want to do the same thing but in background, you can use the detached mode with the option `-d`
```bash
$ docker-compose up -d
```
