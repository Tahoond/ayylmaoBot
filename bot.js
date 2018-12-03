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
    if (message.content === 'code') {
    	message.reply('find the code on my github, fam!');
  	}
});

});

client.on('message', message => {
    if (message.content === 'donald trump') {
    	message.reply('the man that has everything accept for a brain');
  	}
});

client.login(process.env.BOT_TOKEN);
