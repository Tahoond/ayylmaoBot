const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');

});

client.on('message', message => {
    if (message.content === '?discord') {
    	message.reply('add me on discord, theunemans#9256');
  	}
});

});

client.on('message', message => {
    if (message.content === '?ayylmaoBot') {
    	message.reply('I have no point in my life becouse i am a test bot.');
  	}
});


client.login(process.env.BOT_TOKEN);
