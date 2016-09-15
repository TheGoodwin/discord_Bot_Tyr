const Discord = require('discord.js');
const AuthDetails = require("./auth.json");
const Properties = require("./package.json");
const Configuration = require("./conf/conf.json");
const Commands = require("./commands.json");
const MessageFormat = require("./libs/message_format.js");

//Creates the bot
const bot = new Discord.Client();

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

//When the bot records a new message on the server
bot.on('message', msg => {
	let message = msg;
	//If the message is interpreted as a command to the bot
	if (message.content.startsWith(Configuration.command_marker)) {
		
		//Get the command
		let command = message.content.substring(1,message.content.length).toLowerCase();
		
		//Tests the command
		if (command.startsWith("load")) {
			//TODO : get and load the specified module
		} else {
			switch (command) {
				case 'status' :
					//TODO add code to send a message presenting the bot status and the module loaded
					break;
				case 'help':
					var response = "\n";
					
					//Builds the response to the user
					for (var i in Object.keys(Commands)) {
						var currentCommand = Object.keys(Commands)[i];
						response += MessageFormat.formatCommand(Commands[currentCommand]);
					}
					
					//Sends the response to the user and logs it
					message.reply(response)
					.then(message => console.log(`Sent message: ${message.content}`))
					.catch(console.log);
					
					break;
				case 'bye' :
					//Get the main channel of the server
					let mainChannel = bot.channels.first();
					
					//Build a logout message
					let logoutMessage = bot.user + " , The Hand of Justice is retiring !\n"
					+ "It was a pleasure to serve you all !";
					
					//Send the logout message to the server and log it
					mainChannel.sendMessage(logoutMessage)
					.then(message => console.log(`Sent message: ${message.content}`))
					.catch(console.log);
					
					//Wait 2000ms (time for the bot to send the message) then exit node.js without an error
					setTimeout(function(){
						process.exit(0);
					}, 2000);
					
					break;
				case 'ccm' :
					//TODO get the new command mark and change it
					break;
				default:
					console.log("Use of command `" + command + "` not recognized");
					break;
			}
		}
	}
});

bot.login(AuthDetails.token);