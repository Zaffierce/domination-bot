const Discord = require("discord.js");
    
module.exports.run = async (bot, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setAuthor("DomiNATION Post Office & Public Workshops")
    .setColor("#3E82F7")
    .setDescription("G'day Survivor!  I've composed a list of fantastic places you should check out! https://docs.google.com/spreadsheets/d/1JBpMMLBX8QABlMcF3VC-nCnsERQIcCyHy8E3QFb2NM0/edit#gid=0")
    
  message.channel.send(embed);
};