const Discord = require("discord.js");
    
module.exports.run = async (bot, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setAuthor("DomiNATION Ark Breeding Community")
    .setColor("#F28500")
    .setDescription("Are you looking for a specific type of dino?  Want it to be super strong or maybe a specific color?  Then search no more!  Jezera has compiled a list of the best breeders here on DomiNATION for you to contact to get your dream dino.\n\nIf you wish to be added to this list, please contact one of the following individuals:\n● Jezera(Jez#0435)\n● Charlotte(Charlotte#2042)\n● Staurophobic(Staurophobic#0015)")
    .addField("Ark Breeders Sheet:","https://docs.google.com/spreadsheets/d/1n2NCf31kZidHCVNqViTPnJ1cKgKXFj6Mh2ADUHh5Rto/edit#gid=0", true)
    .setThumbnail("https://www.dododex.com/media/creature/featherlight.png");
    
  message.channel.send(embed);
};