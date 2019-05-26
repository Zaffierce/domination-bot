    //A fun command for Nast
    
    const Discord = require("discord.js");
    const emotes = require("../data/emotes.json");
    
    module.exports.run = async (bot, message, args) => {
        let emoteName = args[0];
        let wemoteName = emotes[emoteName];
        if(!wemoteName) { 
        message.channel.send("Please provide an emote!  You can choose from the following:\n*cheer, handsup, laugh, sorry, thank, taunt, salute, wave, yes, no*");
        }
        else {
        let emoteUrl = emotes[emoteName].url;
        let checkEmbed = new Discord.RichEmbed()
            .setImage(emoteUrl)
            .setFooter("This emote is the " + emoteName + " emote!");
        let checkEmbedSecret = new Discord.RichEmbed()
            .setImage(emoteUrl)
            .setFooter("This emote is a secret!");
        
            if (emoteName === 'nast1' || emoteName === 'nast2' || emoteName === 'nast3' || emoteName === 'tsuki' ) {
                message.delete();
                message.channel.send(checkEmbedSecret);
            } else {
        message.channel.send(checkEmbed);
        }}
    };