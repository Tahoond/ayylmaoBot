const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'test') {
    	message.reply('test');
  	}
});
client.on('message', message => {
    if (message.content === 'where am i') {
    	message.reply('space, boi');
  	}
});
client.on('message', message => {
    if (message.content === 'cool') {
    	message.reply('freezah');
  	}
});

client.login(process.env.BOT_TOKEN);
