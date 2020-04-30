const Discord = require("discord.js");
require('dotenv').config();
const events = require("../data/events.json");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    
  let modRole = message.member.hasPermission('KICK_MEMBERS');
  let eventText = message.content.split(' ').splice(1).join(' ');
  let announcements = bot.channels.cache.get(process.env.ANNOUNCEMENTS_ID);
  
  if(!modRole) {     
    message.delete();
  } else {

    let eventData = eventText;
    let eventNumber = 0;
    message.delete();

    if (!events[eventNumber]) events[eventNumber] = {
      eventData: eventData,
    };
    let newEventData = events[eventNumber].eventData = eventData;
    newEventData;
    const embed = new Discord.MessageEmbed()
      .setAuthor('Upcoming DomiNATION Ark Events!')
      .setColor(`#42ebf4`)
      .setDescription(`${eventText}`)
      .setThumbnail('https://cdn.discordapp.com/attachments/566853064967847946/581337829628444682/download.jpg')
      .addField(`Event Map download link: `,`https://steamcommunity.com/sharedfiles/filedetails/?id=788341599`)
      .addField(`If you need to use a Time Zone Conerter, please visit this link.  Note:  This automatically includes the EDT/EST Time Zone.`,`https://www.timeanddate.com/worldclock/converter.html?&p1=179`);
    
    announcements.send(embed);
    fs.writeFile("data/events.json", JSON.stringify(events), (err) => {
      if (err) console.log(err);
    });
              
  }
};