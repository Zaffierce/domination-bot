const emotes = require('../data/emotes.json');
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  let emoteName = args[0];    
  let emoteURL = message.content.split(' ').splice(2).join(' ');
  let modRole = message.member.hasPermission('KICK_MEMBERS');

  if(!modRole) {     
    message.delete();
  } else {
    if(!args[0] || !emoteURL) return message.channel.send("Please check your command and try again.\n**Example:**\n`!addemote [emote name] [URL]`\n`!addemote Zaff www.zaff.com/zaffisamazing.gif`");

    message.delete();

    if (!emotes[emoteName]) emotes[emoteName] = {
      url: emoteURL
    };

    message.channel.send('A new emote has been added!  Try it out by typing `!emote '+emoteName+'`');

    fs.writeFile("data/emotes.json", JSON.stringify(emotes), (err) => {
      if (err) console.log(err);
    });
  }
};