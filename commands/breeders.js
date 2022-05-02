const Discord = require("discord.js");
    
module.exports.run = async (bot, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setAuthor("DomiNATION Ark Breeding Community")
    .setColor("#F28500")
    .setDescription("Hiya Survivor, seems like you're struggling out there with your weaker dinos.  Check this link out below, you may find it to be really helpful!")
    .addField("Ark Breeders Sheet:","https://docs.google.com/spreadsheets/d/1yZXfdWVhpcpcwBQXirjLl-0mzFMCQsLeuhRg3M9ox2k/edit?usp=sharing", true)
    .setThumbnail("https://www.dododex.com/media/creature/featherlight.png");
    
  message.channel.send(embed);
};