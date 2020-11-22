const Discord = require("discord.js");
require('dotenv').config();
const ark_support = process.env.ARK_SUPPORT_ID;
const atlas_support = process.env.ATLAS_SUPPORT_ID;

module.exports.run = async (bot, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setColor('RED')
    // .setDescription('Hello, your request is important to us.  Please follow the steps below to fill out a support ticket and somebody will assist you when available.')
    .setDescription("Hello Survivor!  Lookin for a bit of help, are ya?  Well, don't you worry, good thing you've got ol' HLN-A following you around, right?")

  switch(message.channel.id) {
    case ark_support:
      embed
        .setTitle('DomiNATION Ark Support')
        .setURL('https://support.domination-gaming.com/')
        .setThumbnail('https://cdn.discordapp.com/attachments/483968919804313600/778014605410697246/20201116164643_1.png')
        // .setImage('https://media.giphy.com/media/PpRL1KdglZP5fujnUb/giphy.mp4')
        .addFields(
          {name: '**Step 1**', value: "Click this link right [here!](https://support.domination-gaming.com/ 'DomiNATION Support Website')", inline: false},
          {name: '**Step 2**', value: "Once that opens up, click on '**Open a Ticket**'", inline: false},
          {name: '**Step 3**', value: "Fill out the form completely and then submit the ticket!", inline: false},
          {name: '**Step 4**', value: "Sit back and enjoy a cup of tea, or whatever it is you Survivors like.", inline: false}
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
      message.reply("Hi there, Survivor!  My creator doesn't you to run this command here.  I reckon if you try this again in the support channel, it'll work just fine.").then(d_msg => d_msg.delete({timeout: 60000}));
  }  
}
