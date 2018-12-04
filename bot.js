const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});
//cmds
client.on('message', message => {
    if (message.content === 'hello') {
    	message.reply('Hi there!');
  	}
});
});

client.on('message', message => {
    if (message.content === 'pizza') {
    	message.reply('My favorite food!');
  	}
});

//important
client.login(process.env.BOT_TOKEN);
