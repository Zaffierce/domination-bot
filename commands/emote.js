const Discord = require("discord.js");
const emotes = require("../data/emotes.json");
    
module.exports.run = async (bot, message, args) => {
  let emoteName = args[0];
  let wemoteName = emotes[emoteName];

  if(!wemoteName) { 
    const emoteList = Object.keys(emotes).sort(function(a,b){
      return emotes[b]-emotes[a]
    });

    const mappedEmotes = emoteList.map(c => `${c}`);
    const embedNoEmote = new Discord.MessageEmbed()
      .setDescription("Please prove an emote!  You can choose from the following:\n`"+ mappedEmotes.sort().join(", ")+"`")
    message.channel.send(embedNoEmote);
  } else {
    let emoteUrl = emotes[emoteName].url;
    let embedEmote = new Discord.MessageEmbed()
      .setImage(emoteUrl)
      .setFooter(`This is the ${emoteName} emote!`);
    message.channel.send(embedEmote);
  }
};