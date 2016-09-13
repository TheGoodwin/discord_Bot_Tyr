const Discord = require('discord.js');
const bot = new Discord.Client();
const AuthDetails = require("./auth.json");

bot.on('ready', () => {
	console.log('I am ready!');
});

bot.on('message', message => {
	
	switch (message.content) {
		case '!author':
			message.reply('SoulMourne and ShiiFu');
			break;
		case '!ping':
			message.reply('pong');
			break;
	}
});

bot.login(AuthDetails.token);