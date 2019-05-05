const Discord = require("discord.js");
const arkRules = require('../data/arkRules.json');
const discordRules = require('../data/discordRules.json');
const patreonRules = require('../data/patreonRules.json');
const fs = require("fs");

    module.exports.run = async (bot, message, args) => {
        
    let ruleType = args[0];
    let ruleNumber = args[1];    
    let ruleText = message.content.split(' ').splice(2).join(' ');
    let modRole = message.member.hasPermission('KICK_MEMBERS');
    if(!modRole) {     
        message.delete();
        console.log(message.author.username + " attempted to run a command that they don't have access to!");
        } else {
            if(!args[0] || !args[1]) { return message.channel.send("Please check your command and try again.\n**Example:** !bdeleterule ark 18 .... This will delete Ark Rule #18.");}


            if(ruleType === "ark") {
                if (!arkRules[ruleNumber]) {
                    message.channel.send("Unable to find Rule #**" +ruleNumber+"**, please check again.")
                } else {
                message.channel.send("Attempting to delete Rule #**" +ruleNumber+"**, it used to state...");
                message.channel.send("```"+arkRules[ruleNumber].ruleText+"```");
                delete arkRules[ruleNumber].ruleText;
                delete arkRules[ruleNumber];
                console.log(`${message.author.username} just deleted Rule#${ruleNumber}.`);
                fs.writeFile("data/arkRules.json", JSON.stringify(arkRules), (err) => {
                    if (err) console.log(err);
                });
            }}
            if(ruleType === "discord") {
                if (!discordRules[ruleNumber]) {
                    message.channel.send("Unable to find Rule #**" +ruleNumber+"**, please check again.")
                } else {
                message.channel.send("Attempting to delete Rule #**" +ruleNumber+"**, it used to state...");
                message.channel.send("```"+discordRules[ruleNumber].ruleText+"```");
                delete discordRules[ruleNumber].ruleText;
                delete discordRules[ruleNumber];
                console.log(`${message.author.username} just deleted Rule#${ruleNumber}.`);
                fs.writeFile("data/discordRules.json", JSON.stringify(discordRules), (err) => {
                    if (err) console.log(err);
                });
            }}
            if(ruleType === "patreon") {
                if (!patreonRules[ruleNumber]) {
                    message.channel.send("Unable to find Rule #**" +ruleNumber+"**, please check again.")
                } else {
                message.channel.send("Attempting to delete Rule #**" +ruleNumber+"**, it used to state...");
                message.channel.send("```"+patreonRules[ruleNumber].ruleText+"```");
                delete patreonRules[ruleNumber].ruleText;
                delete patreonRules[ruleNumber];
                console.log(`${message.author.username} just deleted Rule#${ruleNumber}.`);
                fs.writeFile("data/patreonRules.json", JSON.stringify(patreonRules), (err) => {
                    if (err) console.log(err);
                });
            }}



            }
        };