const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true});

client.on("ready", () => {

  console.log(`Logged in as ${client.user.username}!`);

  client.user.setActivity('YouTube', { type: "WATCHING" })

});

client.on("message", async message => {
    
    let prefix = "YOUR BOT PREFIX";
    
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const input = message.content.slice(prefix.length).split(' ');

    const cmd = input.shift();

if(cmd === `ping`) {

message.channel.send(`Hoold on!`).then(m => {

    m.edit(`🏓  ::  **Pong!** (Roundtrip took: **` + (m.createdTimestamp - message.createdTimestamp) + `ms.** Heartbeat: **` + Math.round(client.ping) + `ms.**)`);

    });

 }

});

client.login("NTE4ODk0NDcwMTAwNTQ5Njkx.DuhXjg.VvqZoTayRLVyUhXuTF_AjV0Yn3g");
