const Discord = require("discord.js");

//Create embed help command?  
//Create universal help command based on where the command is ran?  Talk to Alphy.

module.exports.run = async (bot, message, args) => {

    const embed = new Discord.RichEmbed()
    .setAuthor(`DomiNATION Support Form`)
    .setDescription(`Hello, your request is important to us.  Please fill out the form below and an Admin will contact you when available.  Please be aware that tickets take upwards of 5 minutes to appear in our queue, so please be patient.\n\nhttps://goo.gl/forms/ScVJJxXLA53HTCsx2`)
message.channel.send(embed);

}
    
    module.exports.config = {
        command: "help"
    }