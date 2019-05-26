const Discord = require("discord.js");
const events = require("../data/events.json");

    module.exports.run = async (bot, message, args) => {

        let eventNumber = 0;
        let eventText = events[eventNumber].eventData;
        const embed = new Discord.RichEmbed()
            .setAuthor(`Upcoming DomiNATION Ark Events!`)
            .setColor(`#42ebf4`)
            .setDescription(`${eventText}`)
            .setThumbnail('https://cdn.discordapp.com/attachments/566853064967847946/581337829628444682/download.jpg')
            .addField(`If you need to use a Time Zone Converter, please visit this link.  Note:  This automatically includes the EDT/EST Time Zone.`,`https://www.timeanddate.com/worldclock/converter.html?&p1=179`);
        message.channel.send(embed);
        };