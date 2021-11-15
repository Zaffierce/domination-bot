const arkRules = require('../data/arkRules.json');
const discordRules = require('../data/discordRules.json');
const patreonRules = require('../data/patreonRules.json');
const serverAdmins = require('../data/serverAdmins.json');
const banRules = require('../data/banRules.json');
const fs = require("fs");
const { MessageEmbed } = require('discord.js');
require('dotenv').config();

module.exports.run = async (bot, message, args) => {
  const RULES = bot.channels.cache.get(process.env.RULES_ID);
  let modRole = message.member.hasPermission('KICK_MEMBERS');

  function fetchAndDelete() {
    return new Promise(resolve => {
      RULES.messages.fetch().then(m => {
        let messageArr = m.array();
        let i = 0;
        while (i < messageArr.length) {
          messageArr[i].delete();
          i++;
        }
        resolve(true);
      });
    });
  }

  if(!modRole) {     
      message.delete();
  } else {
    const deleted = await fetchAndDelete();

    if (deleted == true) {
        const lineBreakEmbed = new MessageEmbed()
        .setColor('#000000')
        .addField('\u200b', '\u200b');

      let embed = new MessageEmbed()
        .setColor('#0099ff')
        .setAuthor('DomiNATION Discord Rules')
        .setDescription(`These are the rules for the DomiNATION Discord.  Please be aware that these may change at any time and also apply to DM's with members of this server.  Anything you say in a DM can and will be used against you if brought to the admin's with proof.`)
        .setThumbnail('https://lh3.googleusercontent.com/_4zBNFjA8S9yjNB_ONwqBvxTvyXYdC7Nh1jYZ2x6YEcldBr2fyijdjM2J5EoVdTpnkA=w256');
      
      RULES.send(embed);

      for (let i in discordRules) {
        let arr = discordRules[i]
        let ruleEmbed = new MessageEmbed()
          .setColor('#0099ff')
          .addField(`Discord Rule #${i}`, `${arr.ruleText}`);
        RULES.send(ruleEmbed).then(m => {
          for (let j = 0; j < i.length; j++) {
            let ID = arr.messageID = m.id;
            ID;
            fs.writeFile("data/discordRules.json", JSON.stringify(discordRules), (err) => {
              if (err) console.log(err);
            });
          }
        });
      };

      RULES.send(lineBreakEmbed);

      embed = new MessageEmbed()
        .setColor('#76FF33')
        .setAuthor('DomiNATION Ark Rules')
        .setDescription(`These are the rules for the DomiNATION Ark Cluster.  Please be aware that these may change at any time.  Anyone who breaks the following rules will be dealt with on a case by case basis and at full discretion of the admins, with varying degrees of punishment up to and including wipes/bans.`)
        .setThumbnail('http://orig14.deviantart.net/2c5f/f/2015/311/3/5/ark_survival_evolved_icon_by_troublem4ker-d9fw57a.png');
      RULES.send(embed);

      for (let i in arkRules) {
        let arr = arkRules[i];
        const ruleEmbed = new MessageEmbed()
          .setColor('#76FF33')
          .addField(`Ark Rule #${i}`, `${arr.ruleText}`);
        RULES.send(ruleEmbed).then(m => {
          for (let j = 0; j < i.length; j++) {
            let ID = arr.messageID = m.id;
            ID;
            fs.writeFile("data/arkRules.json", JSON.stringify(arkRules), (err) => {
              if (err) console.log(err);
            });
          };
        })
      };

      RULES.send(lineBreakEmbed);

      embed = new MessageEmbed()
        .setColor('#8500FF')
        .setAuthor('DomiNATION Ark Patron Rules')
        .setDescription(`These are the rules for the DomiNATION Ark Patron's only!  All rules posted above still apply, but with slight modification as follows.`)
        .setThumbnail('https://cdn.discordapp.com/attachments/480355364613783566/570192827699560458/pirate-dilo-2_1.png')

      RULES.send(embed);

      for (let i in patreonRules) {
        let arr = patreonRules[i];
        const patreonRulesEmbed = new MessageEmbed()
          .setColor('#8500FF')
          .addField(`Patreon Rule #${i}`, `${arr.ruleText}`);
        RULES.send(patreonRulesEmbed).then(m => {
          for (let j = 0; j < i.length; j++) {
            let ID = arr.messageID = m.id;
            ID;
            fs.writeFile("data/patreonRules.json", JSON.stringify(patreonRules), (err) => {
              if (err) console.log(err);
            });
          };
        });
      };

      RULES.send(lineBreakEmbed);

      embed = new MessageEmbed()
        .setColor('#F6DD0F')
        .setAuthor('Ark Admin Tribe Names')
        .setDescription(`The following is a full list of the current ARK admins and their tribes on each server.`)
        .setThumbnail('https://cdn.discordapp.com/attachments/566853064967847946/570453800129658892/e4d52f4d69d7bba67e5fd70ffe26b70d.png')
      RULES.send(embed);

      for (let i in serverAdmins) {
        let arr = serverAdmins[i];
        const serverAdminsEmbed = new MessageEmbed()
          .setColor('#F6DD0F')
          .addField(`Ark Server #${i}`, `${arr.serverAdminList}`);
        RULES.send(serverAdminsEmbed).then(m => {
          for (let j = 0; j < i.length; j++) {
            let ID = arr.messageID = m.id;
            ID;
            fs.writeFile("data/serverAdmins.json", JSON.stringify(serverAdmins), (err) => {
              if (err) console.log(err);
            });
          };
        });
      }

      RULES.send(lineBreakEmbed);

      embed = new MessageEmbed()
        .setColor('#f44242')
        .setAuthor('DomiNATION Gaming Point System 2.0')
        .setDescription(`This is the guidelines by which the Admin's follow when issuing punishments.  This is public to make it known to all, so each punishment is fair and just.  Points are accumulated by breaking the rules, each violation of a rule gains a player(s) points depending on severity and times occured.  Punishments are handed down based on how many points a player(s) has, based on the following guide:`)
        .setThumbnail('https://cdn.discordapp.com/attachments/566853064967847946/572723585840447499/ban-hammer-ol-512.png')
      RULES.send(embed);

      for (let i in banRules) {
        let arr = banRules[i];
        const banRulesEmbed = new MessageEmbed()
          .setColor('#f44242')
          .setDescription(`${arr.ruleText}`)
        RULES.send(banRulesEmbed).then(m => {
          for (let j = 0; j < i.length; j++) {
            let ID = arr.messageID = m.id;
            ID;
            fs.writeFile("data/banRules.json", JSON.stringify(banRules), (err) => {
              if (err) console.log(err);
            });
          };
        });
      };

      const footerEmbed = new MessageEmbed()
        .setColor('#000000')
        .setTimestamp()
        .setFooter('Posted on');
      RULES.send(footerEmbed);
  }}
};