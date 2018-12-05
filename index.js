//REQUIRED
const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "ayy lmao"

client.user.setGame(prefix + "ayy lmao");

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'hello') {
    	message.reply('Hi there!');
  	}
});

//REQUIRED
client.login(process.env.BOT_TOKEN);
