const Discord = require("discord.js");
    
module.exports.run = async (bot, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setAuthor("What is CCC?")
    .setColor("#3E82F7")
    .setDescription("CCC is a console command that you can run inside of Ark, which is Copy Coords to Clipboard.  Running this provides the exact location and orientation that you are in, which can then be sent to an Admin and is much faster and easier than providing X and Y coordinates.")
    .addField("Step 1:", "While inside Ark, press the TAB button on your keyboard.  This will open a black bar, which is the console.")
    .addField("Step 2:", "Inside the console, type **CCC** and then hit enter")
    .addField("Step 3:", "Although nothing has appeared on screen, you have now performed the Copy Coords to Clipboard command.  Return here and CTRL+V (paste), you should now see a series of numbers which can be sent to the Admins.")
    .addField("Note:", "To close the console, hit TAB two more times.")
    .setImage("https://cdn.discordapp.com/attachments/480355364613783566/917901554282025040/rsvlFDZZU5.gif")
  message.channel.send(embed);
};