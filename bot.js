const Discord = require('discord.js');
const bot = new Discord.Client();
const AuthDetails = require("./auth.json");
const Properties = require("./package.json");
const Configuration = require("./conf/conf.json");

//const Commands = require("./bot_modules/commands.js")(bot);

//When the bot starts
bot.on('ready', () => {
	//Log the connection
	console.log('====\nConnected to server\nCurrent version : '
	+ Properties.version + "\n====");
	
	//Get the main channel of the server
	let mainChannel = bot.channels.first();
	
	//Build a startup message
	let message = bot.user + " , The Hand of Justice ready to serve you !\n"
	+ "My current version is " + Properties.version + " !";
	
	//Send the startup message to the server and log it
	mainChannel.sendMessage(message)
	.then(message => console.log(`Sent message: ${message.content}`))
	.catch(console.log);
});

bot.on('message', message => {
	
	//If the message is interpreted as a command to the bot
	if (message.content.startsWith(Configuration.command_marker)) {
		
		//Get the command
		let command = message.content.substring(1,message.content.length).toLowerCase();
		
		//Tests the command
		if (command.startsWith("load")) {
			//TODO : get and load the specified module
		} else {
			switch (command) {
				case 'help':
					//TODO add the help code
					break;
				case 'bye' :
					//Get the main channel of the server
					let mainChannel = bot.channels.first();
					
					//Build a logout message
					let message = bot.user + " , The Hand of Justice is retiring !\n"
					+ "It was a pleasure to serve you all !";
					
					//Send the logout message to the server and log it
					mainChannel.sendMessage(message)
					.then(message => console.log(`Sent message: ${message.content}`))
					.catch(console.log);
					
					//Wait 2000ms (time for the bot to send the message) then exit node.js without an error
					setTimeout(function(){
						process.exit(0);
					}, 2000);
					
					break;
				default:
					console.log("Use of command `" + command + "` not recognized");
					break;
			}
		}
	}
});

bot.login(AuthDetails.token);