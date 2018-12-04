const Discord = require('discord.js');
const client = new Discord.Client();
//cmds
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'hello') {
    	message.reply('Hi there!');
  	}
});
//important
client.login(process.env.BOT_TOKEN);
