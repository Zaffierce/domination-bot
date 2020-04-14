const Discord = require("discord.js");
const serverAdmins = require('../data/serverAdmins.json');
const fs = require("fs");
require('dotenv').config();

module.exports.run = async (bot, message, args) => {
    
  let serverNumber = args[0];    
  let serverAdminList = message.content.split(' ').splice(2).join(' ');
  let modRole = message.member.hasPermission('KICK_MEMBERS');
  if(!modRole) {     
    message.delete();
  } else {
    let channel = bot.channels.cache.get(process.env.RULES_ID);
    let announcements = bot.channels.cache.get(process.env.ANNOUNCEMENTS_ID);
    if(!args[0] || !serverAdminList) return message.channel.send("Please check your command and try again.\n**Example:** `!editserveradmin 1 Zaff` - This makes Zaff the only tribe on ISLAND.");

    message.delete();

    if (!serverAdmins[serverNumber]) serverAdmins[serverNumber] = {
      serverAdminList: serverAdminList,
      serverNum: serverNumber,
      messageID: "none"
    };

    let oldServerAdminList = serverAdmins[serverNumber].serverAdminList;

    serverAdmins[serverNumber] = {
      serverAdminList: serverAdminList,
      serverNum: serverNumber,
      messageID: serverAdmins[serverNumber].messageID
    }
            
    if (serverAdmins[serverNumber].messageID === "none") {
      const embed = new Discord.MessageEmbed()
        .setColor(`#F6DD0F`)
        .addField(`Ark Server #${serverNumber}`, `${serverAdminList}`);
      message.channel.send("Adding new Server Admin list.  This will not appear until !postrules has been ran.");
      message.channel.send(embed);
      fs.writeFile("data/serverAdmins.json", JSON.stringify(serverAdmins), (err) => {
          if (err) console.log(err);
      });
    } else {
      const oldEmbed = new Discord.MessageEmbed()
        .setColor(`#F6DD0F`)
        .addField(`Ark Server #${serverNumber}`,`${oldServerAdminList}`);
      announcements.send("A change has been made to the Server Admin List!");
      announcements.send("**OLD LIST**");
      announcements.send(oldEmbed).then(() => {
        const embed = new Discord.MessageEmbed()
          .setColor(`#F6DD0F`)
          .addField(`Ark Server #${serverNumber}`,`${serverAdminList}`);
        
        let embedObjectID = Object.assign({}, embed.fields['0']);
        embedObjectID.value = serverAdminList;
        const newEmbed = new Discord.MessageEmbed({
          color: embed.color,
          fields: [embedObjectID],
        });
        let serverListID = serverAdmins[serverNumber].messageID;
        channel.messages.fetch(serverListID).then(message => message.edit(newEmbed)).catch(e => console.log(e));
        announcements.send("**NEW LIST**");
        announcements.send(newEmbed);
      });

      fs.writeFile("data/serverAdmins.json", JSON.stringify(serverAdmins), (err) => {
        if (err) console.log(err);
      });
    }
  }
};