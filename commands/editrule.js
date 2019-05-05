const Discord = require("discord.js");
const arkRules = require('../data/arkRules.json');
const discordRules = require('../data/discordRules.json');
const patreonRules = require('../data/patreonRules.json');
const rules = require('../data/arkRules.json');
const fs = require("fs");

    module.exports.run = async (bot, message, args) => {
        
    let ruleType = args[0];
    let ruleNumber = args[1];    
    let ruleText = message.content.split(' ').splice(3).join(' ');
    let modRole = message.member.hasPermission('KICK_MEMBERS');
    if(!modRole) {     
        message.delete();
        console.log(message.author.username + " attempted to run a command that they don't have access to!");
        } else {
            if(!args[0] || !args[1] || !ruleText) { return message.channel.send("Please check your command and try again.\n**Example:** !beditrule ark 19 This rule applies to Ark and is Rule #19.") }
            if (ruleType === 'ark') {
                message.delete();
                if (!arkRules[ruleNumber]) arkRules[ruleNumber] = {
                    ruleText: ""
                };
                var newText = arkRules[ruleNumber].ruleText = ruleText;
                newText;
                message.channel.send("Attempting to add Ark Rule #**"+ruleNumber+"** that states...");
                message.channel.send("```"+ruleText+"```");
                console.log(`${message.author.username} just added Rule #${ruleNumber}.`);
                fs.writeFile("data/arkRules.json", JSON.stringify(arkRules), (err) => {
                    if (err) console.log(err);
                });
            }
            if (ruleType === 'discord') {
                if (!discordRules[ruleNumber]) discordRules[ruleNumber] = {
                    ruleText: ""
                };
                var newText = discordRules[ruleNumber].ruleText = ruleText;
                newText;
                message.channel.send("Attempting to add Discord Rule #**"+ruleNumber+"** that states...");
                message.channel.send("```"+ruleText+"```");
                console.log(`${message.author.username} just added Rule #${ruleNumber}.`);
                fs.writeFile("data/discordRules.json", JSON.stringify(discordRules), (err) => {
                    if (err) console.log(err);
                });
            }
            if (ruleType === 'patreon') {
                if (!patreonRules[ruleNumber]) patreonRules[ruleNumber] = {
                    ruleText: ""
                };
                var newText = patreonRules[ruleNumber].ruleText = ruleText;
                newText;
                message.channel.send("Attempting to add Patreon Rule #**"+ruleNumber+"** that states...");
                message.channel.send("```"+ruleText+"```");
                console.log(`${message.author.username} just added Rule #${ruleNumber}.`);
                fs.writeFile("data/patreonRules.json", JSON.stringify(patreonRules), (err) => {
                    if (err) console.log(err);
                });
            }




        }
    };