const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'hello') {
    	message.reply('Hi there');
  	}
});

client.on('message', message => {
    if (message.content === 'code') {
    	message.reply('No code for you my man');
  	}
});

client.on('message', message => {
    if (message.content === 'fuck') {
    	message.reply('That is a nono word');
  	}
});

client.login(process.env.BOT_TOKEN);
