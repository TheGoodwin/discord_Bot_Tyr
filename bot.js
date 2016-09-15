const Discord = require('discord.js');
const bot = new Discord.Client();
const AuthDetails = require("./auth.json");
const Properties = require("./package.json");
const Configuration = require("./conf/conf.json");

//const Commands = require("./bot_modules/commands.js")(bot);


bot.on('ready', () => {
	console.log('I am ready!');
	//TODO add version number and say a startup message in the main channel
});

bot.on('message', message => {
	//If the message is interpreted as a command to the bot
	if (message.content.startsWith(Configuration.command_marker)) {
		//Get the command
		let command = message.content.substring(1,message.content.length).toLowerCase();
		if (command.startsWith("load")) {
			//TODO : get and load the specified module
		} else if (command == "help") {
			//TODO Show all the command from the loaded module
		}
	}
	//TODO add commands to load modules	
});

bot.login(AuthDetails.token);