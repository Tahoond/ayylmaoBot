//REQUIRED
const Discord = require('discord.js');
const client = new Discord.Client();

bot.user.setActivity('Playing games')

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
