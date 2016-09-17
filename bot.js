const Discord = require('discord.js');
const AuthDetails = require("./auth.json");
const Properties = require("./package.json");
const Configuration = require("./conf/conf.json");
const Commands = require("./commands.json");
const MessageFormat = require("./libs/message_format.js");
const Command = require("./libs/command.js").Command;
const fs = require("fs");

//Creates the bot
const bot = new Discord.Client();

//const Commands = require("./bot_modules/commands.js")(bot);

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
	mainChannel.sendMessage(message)
		.then(message => console.log(`Sent message: ${message.content}`))
		.catch(console.log);
		
	//Update the status message
	bot.user.setStatus('online', 'cm : ' + Configuration.command_marker)
					.then(user => console.log('Changed status to ' + bot.user.status))
					.catch(console.log);
});

//When the bot records a new message on the server
bot.on('message', msg => {
	let message = msg;
	//If the message is interpreted as a command to the bot
	if (message.content.startsWith(Configuration.command_marker)) {

		//Get the command
		let cmd = new Command(message.content.substring(Configuration.command_marker.length, message.content.length));

		//Tests the command

		switch (cmd.getCommandName().toLowerCase()) {
			case 'load':
				//TODO : get and load the specified module
				break;
			case 'status':
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
			case 'bye':
				//Get the main channel of the server
				let mainChannel = bot.channels.first();

				//Build a logout message
				let logoutMessage = bot.user + " , The Hand of Justice is retiring !\n" +
					"It was a pleasure to serve you all !";

				//Send the logout message to the server and log it
				mainChannel.sendMessage(logoutMessage)
					.then(message => console.log(`Sent message: ${message.content}`))
					.catch(console.log);

				//Wait 2000ms (time for the bot to send the message) then exit node.js without an error
				setTimeout(function() {
					process.exit(0);
				}, 2000);

				break;
			case 'ccm':
				//Check the number of parameters
				if (cmd.getCommandParameters().length > 0) {
					let reply = "";
					//Get the first parameter and change it in the JSON object
					switch (cmd.getCommandParameters()[0]) {
						//Replace the command marker with the default one
						case '-r' :
						case '-reset':
							//If the marker is not the default one
							if (Configuration.command_marker != '&') {
								Configuration.command_marker = '&';
								reply = "Sucessfully reset the command marker to `&`";
							}
							else { //If the marker is already the default one
								reply = "The command marker is already set to default (`&`)";
							}
							break;
						default:
							Configuration.command_marker = cmd.getCommandParameters()[0];
							reply = "Successfully changed the command marker to `" + cmd.getCommandParameters()[0] +
								"`. You may now use it to launch other commands";
							break;
					}
					message.reply(reply).then(message => console.log(`Sent message: ${message.content}`))
						.catch(console.log);
					//Save the new Configuration
					fs.writeFile("./conf/conf.json", JSON.stringify(Configuration));
					console.log("Changed and saved the new configuration in the conf file");
					//Update the bot status
					bot.user.setStatus('online', 'cm : ' + Configuration.command_marker)
						.then(user => console.log('Changed status to ' + bot.user.status))
						.catch(console.log);
				}
				else {
					let reply = "Error while changing the command marker. Did you pass a new command marker?\n" +
						"Type the " + Configuration.command_marker + "help command for more information.";
					message.reply(reply).then(message => console.log(`Sent message: ${message.content}`))
						.catch(console.log);
				}
				break;
			default:
				console.log("Use of command `" + cmd.getCommandName() + "` not recognized");
				break;
		}
	}
});

bot.login(AuthDetails.token);