const Discord = require("discord.js");
const arkRules = require('../data/arkRules.json');

module.exports.run = async (bot, message, args) => {
  let rule = arkRules[args[0]]

  if (!rule) return message.channel.send(`Error finding **Rule #${rule}**, please try again.`);

  const rulesEmbed = new Discord.MessageEmbed()
    .setColor(`#76FF33`)
    .addField(`Ark Rule #${args[0]}`,`${rule.ruleText}`);
  message.channel.send(rulesEmbed);
};