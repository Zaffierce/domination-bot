const Discord = require("discord.js");
const emotes = require('../data/emotes.json')
const fs = require("fs");

    module.exports.run = async (bot, message, args) => {
        
    let emoteName = args[0];
    let modRole = message.member.hasPermission('KICK_MEMBERS');
    if(!modRole) {     
        message.delete();
        console.log(message.author.username + " attempted to run a command that they don't have access to!");
        } else {
            if(!args[0]) { return message.channel.send("Please check your command and try again.\n**Example:** !deleteemote zaff");}
                if (!emotes[emoteName]) {
                    message.delete();
                    message.channel.send("Unable to find "+emoteName+", please check again.")
                } else {
                message.delete();
                message.channel.send(`Emote ${emoteName} has been deleted.`)
                delete emotes[emoteName];
                fs.writeFile("data/emotes.json", JSON.stringify(emotes), (err) => {
                    if (err) console.log(err);
                });
            }}
        };