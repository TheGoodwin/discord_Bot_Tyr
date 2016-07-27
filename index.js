var Discord = require("discord.js");

var bot = new Discord.Client();

var AuthDetails = require("./auth.json");

//when the bot is ready
bot.on("ready", () => {
	console.log(`Ready to begin! Serving in ${bot.channels.length} channels`);
});

//when the bot disconnects
bot.on("disconnected", () => {
	//alert the console
	console.log("Disconnected!");

	//exit node.js with an error
	process.exit(1);
});

//when the bot receives a message
bot.on("message", msg => {
	//if message begins with "!ping"
	if (msg.content.startsWith("!ping")) {
		//send a message to the channel the ping message was sent in.
		bot.reply(msg, "pong !");

		//alert the console
		console.log("pong-ed " + msg.author.username);
	}
	
	//if message begins with "!bye"
	if (msg.content.startsWith("!bye")) {
		//alert the console
		console.log("disconnected by " + msg.author.username);
		
		//logout
		bot.logout();
		
		//exit node.js without an error
		process.exit(0);
	}
});

bot.loginWithToken(AuthDetails.token);