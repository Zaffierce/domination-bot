const mutedUsers = require('../data/muted.json');
const fs = require("fs");


module.exports.run = async (bot, message, args) => {
    
  let modRole = message.member.hasPermission('KICK_MEMBERS');
  if (!modRole) {
    message.delete();
  } else {
    let userToUnmute = message.guild.member(message.mentions.users.first());
    if (!userToUnmute) return message.reply("please specify who you wish to unmute.");

    let mutedRole = message.guild.roles.cache.find(r => r.name === "Muted");

    if (userToUnmute._roles.find(r => r === mutedRole.id)) {
      delete mutedUsers[userToUnmute];
      fs.writeFile("data/muted.json", JSON.stringify(mutedUsers), (err) => {
        if (err) console.log(err);
      });
      console.log(userToUnmute);
      userToUnmute.roles.remove(mutedRole.id);
      message.channel.send(`<@${userToUnmute.id}>, you are now unmuted.`);
    } else return message.reply("the user you mentioned is not currently muted.");
  }

};