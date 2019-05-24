const Discord = require("discord.js");
    
module.exports.run = async (bot, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`Jezera's DomiNATION Ark Breeding Community`)
        .setColor(`#F28500`)
        .setDescription(`Are you looking for a specific type of dino?  Want it to be super strong or maybe a specific color?  Then search no more!  Jezera has compiled a list of the best breeders here on DomiNATION for you to contact to get your dream dino.  If you wish to be added to his list, please contact him directly.`)
        .addField(`Ark Breeders Sheet:`,`https://docs.google.com/spreadsheets/d/1n2NCf31kZidHCVNqViTPnJ1cKgKXFj6Mh2ADUHh5Rto/edit#gid=0`)
        .setThumbnail(`https://www.dododex.com/media/creature/featherlight.png`);
    message.channel.send(embed);
};