const Discord = require("discord.js");
const arkRules = require('../data/arkRules.json');
const discordRules = require('../data/discordRules.json');
const patreonRules = require('../data/patreonRules.json');
const banRules = require('../data/banRules.json');
const fs = require("fs");
require('dotenv').config();


module.exports.run = async (bot, message, args) => {
    
  let ruleType = args[0];
  let ruleNumber = args[1];
  let ruleText = message.content.split(' ').splice(3).join(' ');
  let modRole = message.member.hasPermission('KICK_MEMBERS');
  let rules = bot.channels.cache.get(process.env.RULES_ID);
  let announcements = bot.channels.cache.get(process.env.ANNOUNCEMENTS_ID);

  if(!modRole) {     
    message.delete();
  } else {
    if(!args[0] || !args[1] || !ruleText) return message.channel.send("Please check your command and try again.\n**Example:** `!editrule ark 19` - This rule applies to Ark and is Rule #19.");
    
    let fileName, section, filepath, color;

    message.delete();

    switch(ruleType){
      case 'ark':
        fileName = arkRules;
        section = 'Ark';
        filepath = 'data/arkRules.json';
        color = '#76FF33';
        break;
      
      case 'discord':
        fileName = discordRules;
        section = 'Discord';
        filepath = 'data/discordRules.json';
        color = '#0099ff';
        break;

      case 'patreon':
        fileName = patreonRules;
        section = 'Patreon';
        filepath = 'data/patreonRules.json';
        color = '#8500FF';
        break;

      case 'ban':
        fileName = banRules;
        section = 'Ban';
        filepath = 'data/banRules.json';
        color = '#f44242';
        break;
      }

    if (!fileName[ruleNumber]) fileName[ruleNumber] = {
      ruleText: ruleText,
      ruleNum: ruleNumber,
      messageID: "none"
    };
    
    let oldRuleText = fileName[ruleNumber].ruleText;

    fileName[ruleNumber] = {
      ruleText: ruleText,
      ruleNum: ruleNumber,
      messageID: fileName[ruleNumber].messageID
    }

    if(fileName[ruleNumber].messageID === "none") {
      const embed = new Discord.MessageEmbed()
        .setColor(color)
        .addField(`${section} Rule #${ruleNumber}`, `${ruleText}`);
        
      message.channel.send("Adding a new rule.  This will not appear until `!postrules` has been ran.");
      message.channel.send(embed);

      fs.writeFile(filepath, JSON.stringify(fileName), (err) => {
        if (err) console.log(err);
      });
    } else {
      const oldEmbed = new Discord.MessageEmbed()
        .setColor(color)
        .addField(`${section} Rule #${ruleNumber}`,`${oldRuleText}`);

      announcements.send("A change has been made to the rules");
      announcements.send("**OLD RULE**");
      announcements.send(oldEmbed).then(() => {
        const embed = new Discord.MessageEmbed()
          .setColor(color)
          .addField(`${section} Rule #${ruleNumber}`,`${ruleText}`);

        let embedObjectID = Object.assign({}, embed.fields['0']);
        embedObjectID.value = ruleText;
        const newEmbed = new Discord.MessageEmbed({
          color: embed.color,
          fields: [embedObjectID],
        });
        let ruleID = fileName[ruleNumber].messageID;
        rules.messages.fetch(ruleID).then(message => message.edit(newEmbed)).catch(e => console.log(e));
        announcements.send("**NEW RULE**");
        announcements.send(newEmbed);
      });
     
      fs.writeFile(filepath, JSON.stringify(fileName), (err) => {
        if (err) console.log(err);
      });
    }   
  }      
};