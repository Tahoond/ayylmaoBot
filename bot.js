const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'hello') {
    	message.reply('sup');
  	}
});

});

client.on('message', message => {
    if (message.content === '?roblox') {
    	message.reply('minecraft is better');
  	}
});


client.login(process.env.BOT_TOKEN);
