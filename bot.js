const Discord = require('discord.js');
const AuthDetails = require("./auth.json");
const Properties = require("./package.json");
const Configuration = require("./conf/conf.json");
const MessageFormat = require("./libs/message_format.js");
const ModuleLoader = require("./libs/module_loader.js").ModuleLoader;
const Command = require("./libs/command.js").Command;
const Parameter = require("./libs/parameter.js").Parameter;
const Utilities = require("./libs/utilities.js");
const fs = require("fs");

//Creates the bot
const bot = new Discord.Client();

const moduleLoader = new ModuleLoader();

//When the bot starts
bot.on('ready', () => {
	//Log the connection
	console.log('====\nConnected to server\nCurrent version : ' +
		Properties.version + "\n====");

	//Get the main channel of the server
	let mainChannel = bot.channels.first();

	//Build a startup message
	let message = bot.user + " , The Hand of Justice ready to serve you !\n" +
		"My current version is " + Properties.version + " !";

	//Send the startup message to the server and log it
	// mainChannel.send(message)
	// 	.then(message => console.log(`Sent message: ${message.content}`))
	// 	.catch(console.log);

	moduleLoader.loadModule("default", bot, {"moduleLoader":moduleLoader, "Properties":Properties});

	moduleLoader.loadModules(Configuration.modules, bot);

	//Update the status message
	bot.user.setGame('cm : ' + Configuration.command_marker)
					.then(user => console.log('Changed status to ' + bot.user.presence.game.name))
					.catch(console.log);
});

bot.on('reconnecting', () => {
	console.log("Error during connection, reconnecting");
	bot.destroy().then(bot.login(AuthDetails.token));
});

bot.login(AuthDetails.token);
