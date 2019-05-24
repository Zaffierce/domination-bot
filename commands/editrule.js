const Discord = require("discord.js");
const arkRules = require('../data/arkRules.json');
const discordRules = require('../data/discordRules.json');
const patreonRules = require('../data/patreonRules.json');
const banRules = require('../data/banRules.json');
const update = require("../update.json");
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
            let channel = bot.channels.get(update.rules);
            let announcements = bot.channels.get(update.announcements);
            if(!args[0] || !args[1] || !ruleText) { return message.channel.send("Please check your command and try again.\n**Example:** !beditrule ark 19 This rule applies to Ark and is Rule #19.") }
            
            if (ruleType === 'ark') {
                message.delete();
                if (!arkRules[ruleNumber]) arkRules[ruleNumber] = {
                    ruleText: "",
                    ruleNum: "",
                    messageID: "none"
                };
                let wRuleText = arkRules[ruleNumber].ruleText;
                var newText = arkRules[ruleNumber].ruleText = ruleText;
                var newNum = arkRules[ruleNumber].ruleNum = ruleNumber;
                newText;
                newNum;

                if (arkRules[ruleNumber].messageID === "none") {
                    const embed = new Discord.RichEmbed()
                        .setColor(`#76FF33`)
                        .addField(`Ark Rule #${ruleNumber}`, `${ruleText}`);
                    message.channel.send("Adding a new rule.  This will not appear until !postrules has been ran.");
                    message.channel.send(embed);
                    console.log(`${message.author.username} just edited Ark Rule #${ruleNumber}.`);
                    fs.writeFile("data/arkRules.json", JSON.stringify(arkRules), (err) => {
                    if (err) console.log(err);
                    });
                } else {
                const oldEmbed = new Discord.RichEmbed()
                    .setColor(`#76FF33`)
                    .addField(`Ark Rule #${ruleNumber}`,`${wRuleText}`);                    
                announcements.send("A change has been made to the rules!");
                announcements.send("**OLD RULE**");
                announcements.send(oldEmbed).then(function() {
                    var newText = arkRules[ruleNumber].ruleText = ruleText;
                    var newNum = arkRules[ruleNumber].ruleNum = ruleNumber;
                    newText;
                    newNum;
                    const embed = new Discord.RichEmbed()
                    .setColor(`#76FF33`)
                    .addField(`Ark Rule #${ruleNumber}`,`${ruleText}`);
                    let embedObjectID = Object.assign({}, embed.fields['0']);
                    embedObjectID.value = ruleText;
                    const newEmbed = new Discord.RichEmbed({
                        color: embed.color,
                        fields: [embedObjectID],
                    });
                    let arkRulesID = arkRules[ruleNumber].messageID;
                    channel.fetchMessage(arkRulesID).then(message => message.edit(newEmbed));
                    announcements.send("**NEW RULE**");
                    announcements.send(newEmbed);
                });
                console.log(`${message.author.username} just edited Ark Rule #${ruleNumber}.`);
                fs.writeFile("data/arkRules.json", JSON.stringify(arkRules), (err) => {
                    if (err) console.log(err);
                });
                }
            }
            
            if (ruleType === 'discord') {
                message.delete();
                if (!discordRules[ruleNumber]) discordRules[ruleNumber] = {
                    ruleText: "",
                    ruleNum: "",
                    messageID: "none"
                };
                let wRuleText = discordRules[ruleNumber].ruleText;
                var newText = discordRules[ruleNumber].ruleText = ruleText;
                var newNum = discordRules[ruleNumber].ruleNum = ruleNumber;
                newText;
                newNum;

                if (discordRules[ruleNumber].messageID === "none") {
                    const embed = new Discord.RichEmbed()
                        .setColor(`#0099ff`)
                        .addField(`Discord Rule #${ruleNumber}`, `${ruleText}`);
                    message.channel.send("Adding a new rule.  This will not appear until !postrules has been ran.");
                    message.channel.send(embed);
                    console.log(`${message.author.username} just edited Discord Rule #${ruleNumber}.`);
                    fs.writeFile("data/discordRules.json", JSON.stringify(discordRules), (err) => {
                    if (err) console.log(err);
                    });
                } else {
                const oldEmbed = new Discord.RichEmbed()
                    .setColor(`#0099ff`)
                    .addField(`Discord Rule #${ruleNumber}`,`${wRuleText}`);                 
                announcements.send("A change has been made to the rules!");
                announcements.send("**OLD RULE**");
                announcements.send(oldEmbed).then(function() {
                    var newText = discordRules[ruleNumber].ruleText = ruleText;
                    var newNum = discordRules[ruleNumber].ruleNum = ruleNumber;
                    newText;
                    newNum;
                    const embed = new Discord.RichEmbed()
                    .setColor(`#0099ff`)
                    .addField(`Discord Rule #${ruleNumber}`,`${ruleText}`);
                    let embedObjectID = Object.assign({}, embed.fields['0']);
                    embedObjectID.value = ruleText;
                    const newEmbed = new Discord.RichEmbed({
                        color: embed.color,
                        fields: [embedObjectID],
                    });
                    let discordRulesID = discordRules[ruleNumber].messageID;
                    channel.fetchMessage(discordRulesID).then(message => message.edit(newEmbed));
                    announcements.send("**NEW RULE**");
                    announcements.send(newEmbed);
                });
                console.log(`${message.author.username} just edited Discord Rule #${ruleNumber}.`);
                fs.writeFile("data/discordRules.json", JSON.stringify(discordRules), (err) => {
                    if (err) console.log(err);
                });
                }
            }
            
            if (ruleType === 'patreon') {
                message.delete();
                if (!patreonRules[ruleNumber]) patreonRules[ruleNumber] = {
                    ruleText: "",
                    ruleNum: "",
                    messageID: "none"
                };
                let wRuleText = patreonRules[ruleNumber].ruleText;
                var newText = patreonRules[ruleNumber].ruleText = ruleText;
                var newNum = patreonRules[ruleNumber].ruleNum = ruleNumber;
                newText;
                newNum;

                if (patreonRules[ruleNumber].messageID === "none") {
                    const embed = new Discord.RichEmbed()
                        .setColor(`#8500FF`)
                        .addField(`Patreon Rule #${ruleNumber}`, `${ruleText}`);
                    message.channel.send("Adding a new rule.  This will not appear until !postrules has been ran.");
                    message.channel.send(embed);
                    console.log(`${message.author.username} just edited Patreon Rule #${ruleNumber}.`);
                    fs.writeFile("data/patreonRules.json", JSON.stringify(patreonRules), (err) => {
                    if (err) console.log(err);
                });
                } else {
                const oldEmbed = new Discord.RichEmbed()
                    .setColor(`#8500FF`)
                    .addField(`Patreon Rule #${ruleNumber}`,`${wRuleText}`);                    
                announcements.send("A change has been made to the rules!");
                announcements.send("**OLD RULE**");
                announcements.send(oldEmbed).then(function() {
                    var newText = patreonRules[ruleNumber].ruleText = ruleText;
                    var newNum = patreonRules[ruleNumber].ruleNum = ruleNumber;
                    newText;
                    newNum;
                    const embed = new Discord.RichEmbed()
                    .setColor(`8500FF`)
                    .addField(`Patreon Rule #${ruleNumber}`,`${ruleText}`);
                    let embedObjectID = Object.assign({}, embed.fields['0']);
                    embedObjectID.value = ruleText;
                    const newEmbed = new Discord.RichEmbed({
                        color: embed.color,
                        fields: [embedObjectID],
                    });
                    let patreonRulesID = patreonRules[ruleNumber].messageID;
                    channel.fetchMessage(patreonRulesID).then(message => message.edit(newEmbed));
                    announcements.send("**NEW RULE**");
                    announcements.send(newEmbed);
                });
                console.log(`${message.author.username} just edited Patreon Rule #${ruleNumber}.`);
                fs.writeFile("data/patreonRules.json", JSON.stringify(patreonRules), (err) => {
                    if (err) console.log(err);
                });
                }
            }
            
            if (ruleType === 'ban') {
                message.delete();
                if (!banRules[ruleNumber]) banRules[ruleNumber] = {
                    ruleText: "",
                    ruleNum: "",
                    messageID: "none"
                };
                let wRuleText = banRules[ruleNumber].ruleText;
                var newText = banRules[ruleNumber].ruleText = ruleText;
                var newNum = banRules[ruleNumber].ruleNum = ruleNumber;
                newText;
                newNum;
                
                if (banRules[ruleNumber].messageID === "none") {
                    const embed = new Discord.RichEmbed()
                        .setColor(`#f44242`)
                        .setDescription(`${ruleText}`);
                    message.channel.send("Editing the Ban 2.0 Notes.  This will not appear until !postrules has been ran.");
                    message.channel.send(embed);
                    console.log(`${message.author.username} just edited Ban 2.0 Notes.`);
                    fs.writeFile("data/banRules.json", JSON.stringify(banRules), (err) => {
                    if (err) console.log(err);
                });
                } else {
                const oldEmbed = new Discord.RichEmbed()
                    .setColor(`#f44242`)
                    .setDescription(`${wRuleText}`);                    
                announcements.send("A change has been made to the Ban 2.0 Notes!");
                announcements.send("**OLD NOTES**");
                announcements.send(oldEmbed).then(function() {
                    var newText = banRules[ruleNumber].ruleText = ruleText;
                    var newNum = banRules[ruleNumber].ruleNum = ruleNumber;
                    newText;
                    newNum;
                    const embed = new Discord.RichEmbed()
                    .setColor(`f44242`)
                    .setDescription(`${ruleText}`);
                    const newEmbed = new Discord.RichEmbed({
                        color: embed.color,
                        description: ruleText,
                    });
                    let banRulesRulesID = banRules[ruleNumber].messageID;
                    channel.fetchMessage(banRulesRulesID).then(message => message.edit(newEmbed));
                    announcements.send("**NEW NOTE**");
                    announcements.send(newEmbed);
                });
                console.log(`${message.author.username} just edited Ban 2.0 Notes.`);
                fs.writeFile("data/banRules.json", JSON.stringify(banRules), (err) => {
                    if (err) console.log(err);
                });
                }
            }
        }
    };