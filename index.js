const Discord = require('discord.js')
const client = new Discord.Client()
const { prefix, token, botname } = require(./config.json)

client.on('ready', () => {
  console.log(`Bot tag: ${client.user.tag}`);
  console.log(`Servers: ${client.guilds.cache.size}`);
  client.user.setActivity(`with ${prefix}help`, { type: 'PLAYING' });
});

client.on('message', message => {
  const args = message.content.split(" ").slice(1);
  
  if(message.content === "${prefix}help") {
    let embedhelp = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`${botname} help`)
    .addField(`${prefix}ping`,"untuk mengetes jaringan bot", true)
    .setTimestamp()
    .setFooter(`Requested By ${message.author.username}`)
    
    message.channel.send(embedhelp)
    }
  if(message.content === "${prefix}ping") {
        message.channel.send(
      `🏓Latency is ${Date.now() -
        message.createdTimestamp}ms. API Latency is ${Math.round(
        client.ws.ping
      )}ms`
    );
  }
})

  client.login(token)
