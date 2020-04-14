const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  const embed = new Discord.MessageEmbed()
    .setAuthor('DomiNATION Patreon Whitelisting Steps')
    .setDescription('Thank you for supporting our community.  Please review the information below on how to become whitelisted.')
    .addFields(
      {name:'**Step 1**', value:"*Link your Patreon account to your Discord account -*\nMake sure you are whitelisted in the 'Supporters' group on Discord by linking your Patreon to your Discord account.  See [How do I get my Discord Rewards](https://support.patreon.com/hc/en-us/articles/212052266-How-do-I-get-my-Discord-Rewards/)", inline: false},
      {name:'**Step 2**', value:"*Link your Steam account to the DomiNATION website -*\nUse [this link](https://ark.spectrumdominus.com/rest/auth/steam/login/ 'DomiNATION Steam Log in link') to link your Steam account.", inline: false},
      {name:'**Step 3**', value:"*Link your Discord account to the DomiNATION website -*\nUse [this link](https://ark.spectrumdominus.com/rest/discord/ 'DomiNATION Discord Log in link') to link your Discord account.\n\nExtra tips:\n● Ensure that you are logging into the correct Discord account!\n● Remove any emojis from your name, as this causes issues.", inline: false},
      {name:'**Step 4**', value:"If you have followed Steps 1-3, the last step is to wait as this process may take up to 60 minutes to complete.  If you are still unable to join the server after this, please contact the admins for further assistance.", inline: false}
    )

  message.reply("please check your DM's").then(d_msg => { d_msg.delete({timeout: 60000});});;
  message.author.send(embed);

};