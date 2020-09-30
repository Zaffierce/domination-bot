const Discord = require("discord.js");
const events = require("../data/events.json");

module.exports.run = async (bot, message, args) => {
  message.delete();

  const embed = new Discord.MessageEmbed()
    .setAuthor(`Upcoming DomiNATION Ark Events!`)
    .setColor(`#42ebf4`)
    .setDescription(`${events[0].eventData}`)
    .setThumbnail('https://cdn.discordapp.com/attachments/566853064967847946/581337829628444682/download.jpg')
    .addField(`Event Map download link: `,`https://steamcommunity.com/sharedfiles/filedetails/?id=788341599`)
    .addField(`If you need to use a Time Zone Converter, please visit this link.  Note:  This link includes all US Time Zones`,`https://www.timeanddate.com/worldclock/converter.html?&p1=179&p2=605&p3=220&p4=234`);
    
  message.reply("please check your DM's").then(d_msg => { d_msg.delete({timeout: 60000});});;
  message.author.send(embed);
};