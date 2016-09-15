const Discord = require('discord.js');
const bot = new Discord.Client();
const AuthDetails = require("./auth.json");
const Properties = require("./package.json");
var ModuleLoader = require("./libs/module_loader.js");

//const Commands = require("./bot_modules/commands.js")(bot);


bot.on('ready', () => {
	console.log('I am ready!');
});

bot.on('message', message => {
	//TODO add commands to load modules	
});

bot.login(AuthDetails.token);