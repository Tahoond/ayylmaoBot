const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

});

client.on('message', message => {
    if (message.content === '?ayylmaobot') {
    	message.reply('suop mate');
  	}
});

});

client.on('message', message => {
    if (message.content === '?discord') {
    	message.reply('add me on discord, theunemans#9256');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
