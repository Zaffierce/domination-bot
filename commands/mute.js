const mutedUsers = require('../data/muted.json');
const ms = require("ms");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  
  let modRole = message.member.hasPermission('KICK_MEMBERS');
  if (!modRole) {
    message.delete();
  } else {
    let userToMute = message.guild.member(message.mentions.users.first());
    if (!userToMute) return message.reply("please specify who you wish to mute and for how long.");
    if (userToMute.hasPermission("KICK_MEMBERS")) return message.reply("I am unable to mute this person.");

    let mutedRole = message.guild.roles.cache.find(r => r.name === "Muted");
    let muteTime = args[1];

    if (!muteTime) return message.reply("please include an amount.  You may do 10s, 5m, 3h, or 2d");

    if (!mutedUsers[userToMute]) {
      mutedUsers[userToMute] = {
        time: Date.now()+ms(muteTime)
      };

      await(userToMute.roles.add(mutedRole.id));
      message.channel.send(`<@${userToMute.id}>, you are now muted for ${args[1]}.`);
      fs.writeFile("data/muted.json", JSON.stringify(mutedUsers), (err) => {
        if (err) console.log(err);
      });
    } else {
      message.reply("this user is already muted!");
    }


    


    setTimeout(() => {
      if (userToMute._roles.find(r => r === mutedRole.id)) {
        delete mutedUsers[userToMute];
        fs.writeFile("data/muted.json", JSON.stringify(mutedUsers), (err) => {
          if (err) console.log(err);
        });
        userToMute.roles.remove(mutedRole.id);
        message.channel.send(`<@${userToMute.id}>, you are now unmuted.`);
      }
    }, ms(muteTime));  
  }

};