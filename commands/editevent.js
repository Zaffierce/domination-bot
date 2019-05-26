const Discord = require("discord.js");
const update = require("../update.json");
const events = require("../data/events.json");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    
let modRole = message.member.hasPermission('KICK_MEMBERS');
let eventText = message.content.split(' ').splice(1).join(' ');
let announcements = bot.channels.get(update.announcements);
if(!modRole) {     
    message.delete();
    console.log(message.author.username + " attempted to run a command that they don't have access to!");
    } else {
        let eventData = eventText;
        let eventNumber = 0;
        message.delete();
        if (!events[eventNumber]) events[eventNumber] = {
                eventData: "",
            };
        let newEventData = events[eventNumber].eventData = eventData;
        newEventData;
            const embed = new Discord.RichEmbed()
                .setAuthor('Upcoming DomiNATION Ark Events!')
                .setColor(`#42ebf4`)
                .setDescription(`${eventText}`)
                .setThumbnail('https://cdn.discordapp.com/attachments/566853064967847946/581337829628444682/download.jpg')
                .addField(`If you need to use a Time Zone Converter, please visit this link.  Note:  This automatically includes the EDT/EST Time Zone.`,`https://www.timeanddate.com/worldclock/converter.html?&p1=179`);
            announcements.send(embed);
        console.log(`${message.author.username} just edited the event data.`);
        fs.writeFile("data/events.json", JSON.stringify(events), (err) => {
            if (err) console.log(err);
        });
            
    }
};