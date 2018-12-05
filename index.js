//REQUIRED
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'hello') {
    	message.reply('Hi there!');
  	}
});

client.on('message', message => {
    if (message.content === 'ban me') {
    	message.reply('Ask theunemans if you want to be banned!');
  	}
});
//REQUIRED
client.login(process.env.BOT_TOKEN);
