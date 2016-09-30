/**
 * Module allowing the use of commands to the users
 **/
 
const Properties = require("./../../package.json");
const Configuration = require("./../../conf/conf.json");
const Command = require("./../../libs/command.js").Command;
const Commands = require("./commands.json");

module.exports = function(bot) {
    console.log("Initialization of bot commands.js module");
    
    bot.on('message', message => {
	
	//If the message is interpreted as a command to the bot
	if (message.content.startsWith(Configuration.command_marker)) {
		
		//Get the command
		let cmd = new Command(message.content.substring(Configuration.command_marker.length, message.content.length));
		
		switch (cmd.getCommandName().toLowerCase()) {
			case 'ping':
				message.reply('pong');
				break;
			case 'pong':
				message.reply("ping");
				break;
		}
	}
});

}

