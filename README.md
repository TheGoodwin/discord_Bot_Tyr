![Travis build](https://travis-ci.org/SoulMourne/discordBot_Tyr.svg?branch=master)

# DiscordBot Tyr

Tyr is a chat bot for discord using <a href="https://github.com/hydrabolt/discord.js/">discord.js</a>

# Installation

This bot is written to run on top of node.js. Please see https://nodejs.org/en/download/  
**Node.js 6.0.0 or newer is required.**

Once you have node installed running `npm install` from the bot directory should install all the needed packages. If this command prints errors the bot won't work!

# Running

Before first run you will need to edit `auth.json` file. A bot token for a discord account are required. 

To start the bot just run
`npm run start`.


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
