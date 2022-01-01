const purge = require('../data/purge.json');
const { MessageEmbed } = require('discord.js')

module.exports.run = async (bot, message, args) => {
    
    const embed = new MessageEmbed()
    .setColor('#000000')
    .setAuthor('DomiNATION Purge Information')
    .setThumbnail('https://cdn.discordapp.com/attachments/566853064967847946/926608136746450964/red_gun.png')
    .setDescription(`In an attempt to keep our servers clean and free of clutter, every few months the Admin's do what is known as "The Purge".  Due to the amount of detailed information for the purge, please click [this link here](${purge.link}) to read more. `);

    message.channel.send(embed);

};