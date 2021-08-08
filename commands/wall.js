const Discord = require("discord.js");
    
module.exports.run = async (bot, message, args) => {

  const embed = new Discord.MessageEmbed()
    .setAuthor("DomiNATION Great Wall of Dinosaurs")
    .setDescription(`Thank you for your inquery into the "Great Wall of Dinosaurs"!  Our goal is to proudly showcase the best lines that exist here on DomiNATION at the Community Center on the Event map.`)
    .addFields(
      {name: `Important Information`, value: `Before we continue, we must lay out some basic information and also our criteria.  Please review each list, failure to meet follow this may result in disqualification.`}, 
      {name: `Original Line (You've raised this from the start) Requirements `, value: `● Wild Egg Dino (Max 150) - Minimum level of 345\n● Wild Egg Dino (Max 190) - Minimum level of 380\n● Wild Normal Dino (Max 224) - Minimum level of 410\n● Tek Dino - Minimum level of 435`}, 
      {name: `Un-original Line (You've inherited this line) Requirements`, value: `● Any Dino - +70 levels from when you obtained said line\n● Colors - Must have **3** distinctly different color lines for said dino`}, 
      {name: `Additional Information`, value: `● Your line must meet _at least_ one of the following criteria in EITHER Original or Un-original sections.\n● If you have multiple lines that qualify, please submit only **1** line which you'd like most to display.\n● Not all submissions will be accepted.\n● Any questions, please contact Lawdy#2305`},
      {name: `Submission Link`, value: `If you meet the above criteria, please click on [this link](https://forms.gle/9CpSTxHVptmnU7g16 'Great Wall of Dino's') to submit your request.`}
    )

    message.reply("please check your DM's").then(d_msg => { d_msg.delete({timeout: 60000});});;    
    message.author.send(embed);
};