const Discord = require("discord.js");
const arkRules = require('../data/arkRules.json');
const discordRules = require('../data/discordRules.json');
const patreonRules = require('../data/patreonRules.json');
const fs = require("fs");

/*
    Need to do:  Method for new rules.
    Ideas:  Have it do nothing?  Since a new rule would require a place to go, but if there's no existing spot, it would be out of order?
*/

    module.exports.run = async (bot, message, args) => {
        
    let ruleType = args[0];
    let ruleNumber = args[1];
    let ruleText = message.content.split(' ').splice(3).join(' ');
    let modRole = message.member.hasPermission('KICK_MEMBERS');
    if(!modRole) {     
        message.delete();
        console.log(message.author.username + " attempted to run a command that they don't have access to!");
        } else {
            let channel = bot.channels.get('570150032238575616'); //rules channel
            //let announcements = bot.channels.get('566856352140623872'); //announcements channel
            if(!args[0] || !args[1] || !ruleText) { return message.channel.send("Please check your command and try again.\n**Example:** !beditrule ark 19 This rule applies to Ark and is Rule #19.") }
            
            if (ruleType === 'ark') {
                let arkRulesID = arkRules[ruleNumber].messageID;
                let wRuleText = arkRules[ruleNumber].ruleText;
                message.delete();
                if (!arkRules[ruleNumber]) arkRules[ruleNumber] = {
                    ruleText: "",
                    messageID: ""
                };
                const oldEmbed = new Discord.RichEmbed()
                    .setColor(`#76FF33`)
                    .addField(`Ark Rule ${ruleNumber}`,`${wRuleText}`);
                //announcements.send("A rule has been changed from...");
                //announcements.send(oldEmbed).then(function(oldEmbed) {
                    var newText = arkRules[ruleNumber].ruleText = ruleText;
                    newText;   
                    const embed = new Discord.RichEmbed()
                    .setColor('#76FF33')
                    .addField(`Ark Rule #${ruleNumber}`,`${ruleText}`);  
                    let embedObjectID = Object.assign({}, embed.fields['0']);
                    embedObjectID.value = ruleText;
                    const newEmbed = new Discord.RichEmbed({
                        color: embed.color,
                        fields: [embedObjectID],
                    });
                    channel.fetchMessage(arkRulesID).then(message => message.edit(newEmbed));
                    //announcements.send("to...");
                    //announcements.send(newEmbed);
                //});
                console.log(`${message.author.username} just edited Rule #${ruleNumber}.`);
                fs.writeFile("data/arkRules.json", JSON.stringify(arkRules), (err) => {
                    if (err) console.log(err);
                });
            }
            if (ruleType === 'discord') {
                let discordRulesID = discordRules[ruleNumber].messageID;
                let wRuleText = discordRules[ruleNumber].ruleText;
                message.delete();
                if (!discordRules[ruleNumber]) discordRules[ruleNumber] = {
                    ruleText: "",
                    messageID: ""
                };
                const oldEmbed = new Discord.RichEmbed()
                    .setColor(`0099ff`)
                    .addField(`Discord Rule ${ruleNumber}`,`${wRuleText}`);
                //announcements.send("A rule has been changed from...");
                //announcements.send(oldEmbed).then(function(oldEmbed) {
                    var newText = discordRules[ruleNumber].ruleText = ruleText;
                    newText;
                    const embed = new Discord.RichEmbed()
                    .setColor(`0099ff`)
                    .addField(`Discord Rule ${ruleNumber}`,`${ruleText}`);
                    let embedObjectID = Object.assign({}, embed.fields['0']);
                    embedObjectID.value = ruleText;
                    const newEmbed = new Discord.RichEmbed({
                        color: embed.color,
                        fields: [embedObjectID],
                    });
                    channel.fetchMessage(discordRulesID).then(message => message.edit(newEmbed));
                    //announcements.send("to...");
                    //announcements.send(newEmbed);
                //});
                console.log(`${message.author.username} just added Rule #${ruleNumber}.`);
                fs.writeFile("data/discordRules.json", JSON.stringify(discordRules), (err) => {
                    if (err) console.log(err);
                });
            }
            
            if (ruleType === 'patreon') {
                let patreonRulesID = patreonRules[ruleNumber].messageID;
                let wRuleText = patreonRules[ruleNumber].ruleText;
                message.delete();
                if (!patreonRules[ruleNumber]) patreonRules[ruleNumber] = {
                    ruleText: "",
                    messageID: ""
                };
                const oldEmbed = new Discord.RichEmbed()
                    .setColor(`#8500FF`)
                    .addField(`Patreon Rule ${ruleNumber}`,`${wRuleText}`);
                //announcements.send("A rule has been changed from...");
                //announcements.send(oldEmbed).then(function(oldEmbed) {
                    var newText = patreonRules[ruleNumber].ruleText = ruleText;
                    newText;
                    const embed = new Discord.RichEmbed()
                    .setColor(`#8500FF`)
                    .addField(`Patreon Rule #${ruleNumber}`,`${ruleText}`);
                    let embedObjectID = Object.assign({}, embed.fields['0']);
                    embedObjectID.value = ruleText;
                    const newEmbed = new Discord.RichEmbed({
                        color: embed.color,
                        fields: [embedObjectID],
                    });
                    channel.fetchMessage(patreonRulesID).then(message => message.edit(newEmbed));
                    //announcements.send("to...");
                    //announcements.send(newEmbed);
                //});
                console.log(`${message.author.username} just added Rule #${ruleNumber}.`);
                fs.writeFile("data/patreonRules.json", JSON.stringify(patreonRules), (err) => {
                    if (err) console.log(err);
                });
            }
        }
    };