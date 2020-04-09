const arkRules = require('../data/arkRules.json');
const discordRules = require('../data/discordRules.json');
const patreonRules = require('../data/patreonRules.json');
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
      
  let ruleType = args[0];
  let ruleNumber = args[1];    
  let modRole = message.member.hasPermission('KICK_MEMBERS');

  if(!modRole) {     
      message.delete();
  } else {
    if(!args[0] || !args[1]) return message.channel.send("Please check your command and try again.\n**Example:** `!bdeleterule ark 18` - This will delete Ark Rule #18.");

    switch(ruleType) {
      case 'ark':
        if (!arkRules[ruleNumber]) {
          message.channel.send(`I am unable to find Ark Rule #${ruleNumber}, please check again.`);
        } else {
          message.channel.send(`I am now deleting Ark Rule #${ruleNumber}.`);
          message.channel.send("```"+arkRules[ruleNumber].ruleText+"```");
          delete arkRules[ruleNumber].ruleText;
          delete arkRules[ruleNumber];
          fs.writeFile("data/arkRules.json", JSON.stringify(arkRules), (err) => {
            if (err) console.log(err);
          });
        }
        break;

      case 'discord':
        if (!discordRules[ruleNumber]) {
          message.channel.send(`I am unable to find Discord Rule #${ruleNumber}, please check again.`);
        } else {
          message.channel.send(`I am now deleting Discord Rule #${ruleNumber}.`);
          message.channel.send("```"+discordRules[ruleNumber].ruleText+"```");
          delete discordRules[ruleNumber].ruleText;
          delete discordRules[ruleNumber];
          fs.writeFile("data/discordRules.json", JSON.stringify(discordRules), (err) => {
            if (err) console.log(err);
          });
        }
        break;

      case 'patreon':
        if (!patreonRules[ruleNumber]) {
          message.channel.send(`I am unable to find Patreon Rule #${ruleNumber}, please check again.`);
        } else {
          message.channel.send(`I am now deleting Discord Rule #${ruleNumber}.`);
          message.channel.send("```"+patreonRules[ruleNumber].ruleText+"```");
          delete patreonRules[ruleNumber].ruleText;
          delete patreonRules[ruleNumber];
          fs.writeFile("data/patreonRules.json", JSON.stringify(patreonRules), (err) => {
            if (err) console.log(err);
          });
        }
        break;
    }
  }
};