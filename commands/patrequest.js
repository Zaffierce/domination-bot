const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let embed = new Discord.MessageEmbed()
    .setColor('#8500FF')
    .setTitle('Patreon Request')
    .setURL('https://support.domination-gaming.com/')
    .setThumbnail('https://cdn.discordapp.com/attachments/480355364613783566/570192827699560458/pirate-dilo-2_1.png')
    .setDescription('**Please note that it takes a few days for us to receive the Patreon list, so please be patient and wait for us to announce in #announcements-supporters channel before submitting a request.**')
    .addFields(
      {name: '**How do I request my dinosaur?**', value:"Click the link here - https://support.domination-gaming.com/ - and choose the '**Patreon Request**' option in the dropdown", inline: false},
      {name: '**What can I request?**', value:'You may request any dinosaur that spawns **NATURALLY** within the chosen Ark, at the max level available for that type.  You may also choose the gender and color, but note that if you do choose color then that dinosaur will be neutered.', inline: false},
      {name: "**What's the limitations?**", value:'You may not request specific levels on your dinosaur, whatever rolls when we spawn it is what you get.', inline: false},
      {name: '**Other information**', value:'If you are a $10+ supporter, you have insurance on the requested dinosaur. If something unfortunate were to happen to it, you are able to submit a ticket to get a replacement.', inline: false}
    )    
  message.reply("please check your DM's").then(d_msg => { d_msg.delete({timeout:60000});});;
  message.author.send(embed);
};