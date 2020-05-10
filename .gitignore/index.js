const Discord = require('discord.js');
const bot = new Discord.client();

var prefix = ("*")

bot.on('ready', function() {
	bot.user.setGame("Command: :help");
	console.log("connected");
});

bot.login("NzA4OTIyOTMxMTAyODc1Njk4.XrgdkA.PkE0YeCIITVVk8OtnK5OD8jGL4k");


bot.on('message', message => {
    if (message.content === prefix + "help"){
	message.channel.sendMessage(liste des commandes: \n !tt \n !fabriquand");
    }
				  
    if (message.content === prefix + "tt"){
        message.channe("Création du bot le _10/05/2020_ à _17h53_");
	console.log("Commande effectué");
    }
	    
    if (message.content === prefix + "fabriquant"){
	message.reply("_Ce bot a été crée par Papabaldas_");
	console.log("Commande effectué");
    }
    });	    
