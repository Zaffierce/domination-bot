const Discord = require("discord.js");
const arkRules = require('../data/arkRules.json');

    module.exports.run = async (bot, message, args) => {
        let whichRule = args[0].toLowerCase()
        let wRule = arkRules[whichRule]

        if (!wRule) { return message.channel.send(`Error finding **Rule #${whichRule}**, please try again.`)} 
        else {
            let wRuleText = arkRules[whichRule].ruleText;
            const rulesEmbed = new Discord.RichEmbed()
                .setColor(`#76FF33`)
                .addField(`Ark Rule ${whichRule}`,`${wRuleText}`)
            //message.channel.send(`**Rule #${whichRule}**:  *${wRuleText}*`);
            message.channel.send(rulesEmbed);
        }

    };