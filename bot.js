const Discord = require('discord.js');
const bot = new Discord.Client();
const AuthDetails = require("./auth.json");
const Properties = require("./package.json");

bot.on('ready', () => {
	console.log('I am ready!');
});

bot.on('message', message => {
	
	switch (message.content) {
		case '!author':
			message.reply("My authors are : " + Properties.author);
			break;
		case '!ping':
			message.reply('pong');
			break;
	}
});

bot.login(AuthDetails.token);