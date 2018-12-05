//REQUIRED
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "ayy lmao"

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setGame(prefix + "ayy lmao");
    console.log("This bot has booted up and is ready to function!")
});

client.on('message', message => {
    if (message.content === 'hello') {
    	message.reply('Hi there!');
  	}
});

});

client.on('message', message => {
    if (message.content === 'fuck') {
    	message.reply('That is a nono word!');
  	}
});
        
//REQUIRED
client.login(process.env.BOT_TOKEN);
