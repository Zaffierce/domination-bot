const Discord = require("discord.js");
const serverAdmins = require('../data/serverAdmins.json');
const fs = require("fs");

    module.exports.run = async (bot, message, args) => {
        
    let serverNumber = args[0];    
    let serverAdminList = message.content.split(' ').splice(2).join(' ');
    let modRole = message.member.hasPermission('KICK_MEMBERS');
    if(!modRole) {     
        message.delete();
        console.log(message.author.username + " attempted to run a command that they don't have access to!");
        } else {
            if(!args[0] || !serverAdminList) { return message.channel.send("Please check your command and try again.\n**Example:** !beditserveradmin 1 Zaff, so this makes Zaff the only tribe on ISLAND.") }
            message.delete();
            if (!serverAdmins[serverNumber]) serverAdmins[serverNumber] = {
                serverAdminList: ""
            };
            var newText = serverAdmins[serverNumber].serverAdminList = serverAdminList;
            newText;
            message.channel.send("Attempting to edit Server #**"+serverNumber+"** admin list to the following... ");
            message.channel.send("```"+serverAdminList+"```");
            console.log(`${message.author.username} just edited server #${serverNumber} admin list.`);
            fs.writeFile("data/serverAdmins.json", JSON.stringify(serverAdmins), (err) => {
                if (err) console.log(err);
            });

        }
    };