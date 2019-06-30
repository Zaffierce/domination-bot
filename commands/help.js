const Discord = require("discord.js");
const update = require("../update.json");

//Create embed help command?  
//Create universal help command based on where the command is ran?  Talk to Alphy.

module.exports.run = async (bot, message, args) => {

    if (message.channel.id === update.arkSupport || message.channel.id === update.atlasSupport) {
        if (message.channel.id === update.arkSupport) {
            const embed = new Discord.RichEmbed()
                .setAuthor(`DomiNATION Ark Support Form`)
                .setThumbnail('http://orig14.deviantart.net/2c5f/f/2015/311/3/5/ark_survival_evolved_icon_by_troublem4ker-d9fw57a.png')
                .setDescription(`Hello, your request is important to us.  Please fill out the form below and an Admin will contact you when available.  Please be aware that tickets take upwards of 5 minutes to appear in our queue, so please be patient.\n\nhttps://goo.gl/forms/ScVJJxXLA53HTCsx2`)
            message.channel.send(embed);
        }
        if (message.channel.id === update.atlasSupport) {
            const embed = new Discord.RichEmbed()
                .setAuthor(`DomiNATION Atlas Support Form`)
                .setThumbnail('https://cdn.discordapp.com/attachments/594779842453569546/594816009144369153/atlas.png')
                .setDescription(`Hello, your request is important to us.  Please fill out the form below and an Admin will contact you when available.  Please be aware that tickets take upwards of 5 minutes to appear in our queue, so please be patient.\n\nhttps://forms.gle/J1s66sNXU8U3z9D38`)
            message.channel.send(embed);
            }    
        // if (message.channel.id === update.conanSupport) {
        //   const embed = new Discord.RichEmbed()
        //     .setAuthor(`DomiNATION Conan Support Form`)
        //     .setDescription(``)
        //   message.channel.send(embed);
        // }
    } else {
        message.reply("please use the appropriate support channel for this command.").then(d_msg => { d_msg.delete(60000);});;
    }
}
    
    module.exports.config = {
        command: "help"
    }