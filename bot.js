const Discord = require("discord.js");
const bot = new Discord.Client()
const config = require("./config.json");
const fs = require("fs");
const mutedUsers = require('./data/muted.json');

require('dotenv').config();
const TOKEN = process.env.TOKEN;
const GUILD_ID = process.env.GUILD_ID;
const NOTES_CHANNEL = process.env.NOTES_ID;
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    bot.commands.set(commandName, props);
  });
});

bot.on("ready", () => {
  console.log("I am ready!");
  bot.user.setActivity("We're online, Survivor!");

//   setInterval(function () {
//     //This checks our muted members file every 5 minutes to ensure that nobody stayed muted
//     //if the bot were to restart, or for some other reason why the role may not have been removed

//     let currTime = Date.now();
//     const guild = bot.guilds.cache.get(GUILD_ID);
//     let mutedRole = guild.roles.cache.find(r => r.name === "Muted");

//     for (const user in mutedUsers) {
//       if (mutedUsers[user].time < currTime) {
//         let userID = user.replace(/[<@>]/g, "");
//         let test = guild.members.cache.get(userID);
//         test.roles.remove(mutedRole.id);
//         delete mutedUsers[user];
//         fs.writeFile("data/muted.json", JSON.stringify(mutedUsers), (err) => {
//           if (err) console.log(err);
//         });
//       }
//     }
//  }, 60 * 1000 * 5);
});


bot.on("message", async message => {

  if (message.content.startsWith(config.prefix)) {
    if (message.channel.type === "dm") return;
    var cont = message.content.toLowerCase().slice(config.prefix.length).split(" ");
    var args = cont.slice(1);
    var cmd = bot.commands.get(cont[0]);
    if (cmd) cmd.run(bot, message, args); 
  }
  
  if (message.channel.id == NOTES_CHANNEL) {
    const userID = message.content.split(',')[0].replace(/\D/g,'');
    const ticketType = message.content.split(',')[1];
    const ticketLink = message.content.split(',')[2];
    let hlnaQuote;
    try {
      switch (ticketType) {
        case ' UPDATE':
          hlnaQuote = "Hello Survivor!  An Admin has left a note on your ticket!  Go check it out!";
          break;

        case ' COMPLETED':
          hlnaQuote = "G'day Survivor!  Just wanted to let you know that your ticket was completed!";
          break;
        
        case ' CANCELLED':
          hlnaQuote = 'Aw sorry Survivor, it seems your ticket was cancelled out!';
          break;
      }
      const fetchedUser = await message.guild.members.fetch(userID);
      const embed = new Discord.MessageEmbed()
      .setColor('RED')
      .setDescription(hlnaQuote)
      .setTitle('DomiNATION Support Ticket Notifier')
      .setURL(ticketLink)
      .setThumbnail('https://cdn.discordapp.com/attachments/483968919804313600/778014605410697246/20201116164643_1.png')
      .addFields(
        {name: '**Ticket Link**', value: ticketLink, inline: false},
      )
      .setTimestamp()
      .setFooter('Message sent on')
      fetchedUser.send(embed);
    } catch(e) {
      bot.channels.cache.get(NOTES_CHANNEL).send('<@143840467312836609>, ```'+e+'```');
    }
  }
  
});

bot.on('raw', async event => {
  if (event.t === "GUILD_MEMBER_UPDATE") {
    const d = event.d;
    const fetchedUser = await bot.users.cache.get(d.user.id);
    for (role in d.roles) {
      if (d.roles[role] === '667221406886526988') {
        console.log("Patron role added");
      }
    }
  }
});

bot.on('error', console.error);

bot.login(TOKEN);