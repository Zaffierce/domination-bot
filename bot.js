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
  bot.user.setActivity("Type !help");

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

bot.on("message", message => {
  if (message.content.startsWith(config.prefix)) {
    if (message.channel.type === "dm") return;
    var cont = message.content.toLowerCase().slice(config.prefix.length).split(" ");
    var args = cont.slice(1);
    var cmd = bot.commands.get(cont[0]);
    if (cmd) cmd.run(bot, message, args); 
  }

  if (message.channel.id == NOTES_CHANNEL) {
    const userID = message.content.split(',')[0].replace(/\D/g,'');
    const ticketLink = message.content.split(',')[1];
    const fetchUser = message.guild.members.cache.get(userID);
    fetchUser.send(`There is a new note on your support ticket.  View it here:${ticketLink}`);
  }
});

bot.on('error', console.error);

bot.login(TOKEN);