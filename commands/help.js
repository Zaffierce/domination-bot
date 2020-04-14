const Discord = require("discord.js");
require('dotenv').config();
const ark_support = process.env.ARK_SUPPORT_ID;
const atlas_support = process.env.ATLAS_SUPPORT_ID;

module.exports.run = async (bot, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription('Hello, your request is important to us.  Please follow the steps below to fill out a support ticket and somebody will assist you when available.')

  switch(message.channel.id) {
    case ark_support:
      embed
        .setTitle('DomiNATION Ark Support')
        .setURL('https://support.domination-gaming.com/')
        .setThumbnail('http://orig14.deviantart.net/2c5f/f/2015/311/3/5/ark_survival_evolved_icon_by_troublem4ker-d9fw57a.png')
        .addFields(
          {name: '**Step 1**', value: "Click [this link!](https://support.domination-gaming.com/ 'DomiNATION Support Website')", inline: false},
          {name: '**Step 2**', value: "At the top of the window that opens, please click '**Open a Ticket**'", inline: false},
          {name: '**Step 3**', value: 'Follow the steps in the form and fill out all blanks or drop downs.', inline: false},
          {name: '**Step 4**', value: "Click the '**Submit Ticket**' button and wait patiently!", inline: false}
        );
        message.channel.send(embed);
      break;

    case atlas_support:
      embed
        .setTitle('The PACK Gaming Support Form')
        .setURL('https://docs.google.com/forms/d/e/1FAIpQLSd-shYR0dArSHFGgE2m_APROh9gthUDopQyu7VZ2Q9AEPM7EQ/viewform')
        .setThumbnail('https://cdn.discordapp.com/attachments/594779842453569546/594816009144369153/atlas.png')
        .addFields(
          {name: 'Step 1', value: 'Click this link! https://docs.google.com/forms/d/e/1FAIpQLSd-shYR0dArSHFGgE2m_APROh9gthUDopQyu7VZ2Q9AEPM7EQ/viewform', inline: false},
          {name: 'Step 2', value: 'Fill out the form with the appropriate information.', inline: false},
          {name: 'Step 3', value: 'Submit the ticket and wait patiently!', inline: false},
        );
        message.channel.send(embed);
      break;
    
    default:
      message.reply("please use the appropriate support channel for this command.").then(d_msg => d_msg.delete({timeout: 60000}));
  }  
}
