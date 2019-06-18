const Discord = require("discord.js");
const emotes = require('../data/emotes.json');
const fs = require("fs");

    module.exports.run = async (bot, message, args) => {
    
    let emoteName = args[0];    
    let emoteURL = message.content.split(' ').splice(2).join(' ');
    let modRole = message.member.hasPermission('KICK_MEMBERS');
    if(!modRole) {     
        message.delete();
        console.log(message.author.username + " attempted to run a command that they don't have access to!");
        } else {
            if(!args[0] || !emoteURL) { return message.channel.send("Please check your command and try again.\n**Example:** !addemote Zaff www.zaff.com/zaffisamazing.gif") }
            message.delete();
            if (!emotes[emoteName]) emotes[emoteName] = {
                url: ""
            };
            var newEmoteURL = emotes[emoteName].url = emoteURL;
            newEmoteURL;
            message.channel.send(`A new emote has been added!  Try it out by typing !emote ${emoteName}`);
                fs.writeFile("data/emotes.json", JSON.stringify(emotes), (err) => {
                    if (err) console.log(err);
                });
        }
    };