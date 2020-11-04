const Discord = require("discord.js");
const arkRules = require('../data/arkRules.json');
const discordRules = require('../data/discordRules.json');
const patreonRules = require('../data/patreonRules.json');
const serverAdmins = require('../data/serverAdmins.json');
const banRules = require('../data/banRules.json');
const fs = require("fs");
require('dotenv').config();

module.exports.run = async (bot, message, args) => {
  let rules = bot.channels.cache.get(process.env.RULES_ID);
  let modRole = message.member.hasPermission('KICK_MEMBERS');

  if(!modRole) {     
      message.delete();
  } else {
    if (message.channel.id != rules) return message.reply("please run this in the #rules channel");

    rules.messages.fetch().then(messages => {
      let messagesArr = messages.array();
      for (let i=0; i < messagesArr.length; i++) {
        messagesArr[i].delete();
      }
    }).then(function() {
      const lineBreakEmbed = new Discord.MessageEmbed()
        .setColor('#000000')
        .addField('\u200b', '\u200b');
      const discordRulesEmbedHeader = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setAuthor('DomiNATION Discord Rules')
        .setDescription(`These are the rules for the DomiNATION Discord.  Please be aware that these may change at any time and also apply to DM's with members of this server.  Anything you say in a DM can and will be used against you if brought to the admin's with proof.`)
        .setThumbnail('https://lh3.googleusercontent.com/_4zBNFjA8S9yjNB_ONwqBvxTvyXYdC7Nh1jYZ2x6YEcldBr2fyijdjM2J5EoVdTpnkA=w256');
      message.channel.send(discordRulesEmbedHeader);
      for(var i in discordRules) {
        let myArray = discordRules[i];
        const discordRuleEmbed = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .addField(`Discord Rule #${i}`,`${myArray.ruleText}`);
        message.channel.send(discordRuleEmbed).then(m => {
          for(var j = 0; j < i.length; j++) {
            var ID = myArray.messageID = m.id;
            ID;
            fs.writeFile("data/discordRules.json", JSON.stringify(discordRules), (err) => {
              if (err) console.log(err);
            });
          }
        });
      }

      message.channel.send(lineBreakEmbed);
      
      const arkRuleEmbedHeader = new Discord.MessageEmbed()
        .setColor('#76FF33')
        .setAuthor('DomiNATION Ark Rules')
        .setDescription(`These are the rules for the DomiNATION Ark Cluster.  Please be aware that these may change at any time.  Anyone who breaks the following rules will be dealt with on a case by case basis and at full discretion of the admins, with varying degrees of punishment up to and including wipes/bans.`)
        .setThumbnail('http://orig14.deviantart.net/2c5f/f/2015/311/3/5/ark_survival_evolved_icon_by_troublem4ker-d9fw57a.png');
      message.channel.send(arkRuleEmbedHeader);
      for(var i in arkRules) {
        let myArray = arkRules[i];
        const arkRuleEmbed = new Discord.MessageEmbed()
          .setColor('#76FF33')
          .addField(`Ark Rule #${i}`,`${myArray.ruleText}`);
        message.channel.send(arkRuleEmbed).then(m => {
          for(var j = 0; j < i.length; j++) {
            var ID = myArray.messageID = m.id;
            ID;
            fs.writeFile("data/arkRules.json", JSON.stringify(arkRules), (err) => {
              if (err) console.log(err);
            });
          }
        });
      }

      message.channel.send(lineBreakEmbed);
      
      const patreonRulesEmbedHeader = new Discord.MessageEmbed()
        .setColor('#8500FF')
        .setAuthor('DomiNATION Ark Patreon Rules')
        .setDescription(`These rules are for the DomiNATION Ark Patreon's only!  All rules posted above still apply, but with slight modification as follows.`)
        .setThumbnail('https://cdn.discordapp.com/attachments/480355364613783566/570192827699560458/pirate-dilo-2_1.png');
      message.channel.send(patreonRulesEmbedHeader);
      for(var i in patreonRules) {
        let myArray = patreonRules[i];
        const patreonRuleEmbed = new Discord.MessageEmbed()
          .setColor('#8500FF')
          .addField(`Patreon Rule #${i}`,`${myArray.ruleText}`);
        message.channel.send(patreonRuleEmbed).then(m => {
          for(var j = 0; j < i.length; j++) {
            var ID = myArray.messageID = m.id;
            ID;
            fs.writeFile("data/patreonRules.json", JSON.stringify(patreonRules), (err) => {
              if (err) console.log(err);
            });
          }
        });
      }

      message.channel.send(lineBreakEmbed);
      
      const serverAdminsEmbedHeader = new Discord.MessageEmbed()
        .setColor('#F6DD0F')
        .setAuthor('Ark Admin Tribe Names')
        .setDescription(`The following is a full list of the current ARK admins and their tribes on each server.`)
        .setThumbnail('https://cdn.discordapp.com/attachments/566853064967847946/570453800129658892/e4d52f4d69d7bba67e5fd70ffe26b70d.png');
      message.channel.send(serverAdminsEmbedHeader);
      for(var i in serverAdmins) {
        let myArray = serverAdmins[i];
        const serverAdminsEmbed = new Discord.MessageEmbed()
          .setColor('#F6DD0F')
          .addField(`Ark Server #${i}`,`${myArray.serverAdminList}`);
        message.channel.send(serverAdminsEmbed).then(m => {
          for(var j = 0; j < i.length; j++) {
            var ID = myArray.messageID = m.id;
            ID;
            fs.writeFile("data/serverAdmins.json", JSON.stringify(serverAdmins), (err) => {
              if (err) console.log(err);
            });
          }
        });
      }

      message.channel.send(lineBreakEmbed);
      
      const gamingPointSystemEmbedHeader = new Discord.MessageEmbed()
        .setColor('#f44242')
        .setAuthor('DomiNATION Gaming Point System 2.0')
        .setDescription(`This is the guidelines by which the Admin's follow when issuing punishments.  This is public to make it known to all, so each punishment is fair and just.  Points are accumulated by breaking the rules, each violation of a rule gains a player(s) points depending on severity and times occured.  Punishments are handed down based on how many points a player(s) has, based on the following guide:`)
        .setThumbnail('https://cdn.discordapp.com/attachments/566853064967847946/572723585840447499/ban-hammer-ol-512.png')
      message.channel.send(gamingPointSystemEmbedHeader);
      for(var i in banRules) {
        let myArray = banRules[i];
        const banRulesEmbed = new Discord.MessageEmbed()
          .setColor('#f44242')
          .setDescription(`${myArray.ruleText}`);
        message.channel.send(banRulesEmbed).then(m => {
          for(var j = 0; j < i.length; j++) {
            var ID = myArray.messageID = m.id;
            ID;
            fs.writeFile("data/banRules.json", JSON.stringify(banRules), (err) => {
              if (err) console.log(err);
            });
          }
        });
      }
      
      const footerEmbed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setTimestamp()
        .setFooter(`Posted on`);
      message.channel.send(footerEmbed);
    });
  }
};