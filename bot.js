const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e)); 
client.on("debug", (e) => console.info(e));


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
