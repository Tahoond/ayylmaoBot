const Discord = require('discord.js');
const client = new Discord.Client();

bot.user.setGame("i ate too much kfc");

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'hello') {
    	message.reply('suop mate');
  	}
});

bot.on*("message, function(message) {
    if message.author.equals(bot.user)) return;

if (message.content -- "hey") {
    message.channel.sendMessage("hi");


client.login(process.env.BOT_TOKEN);
