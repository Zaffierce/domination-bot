const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete();

    const commandsEmbed = new Discord.RichEmbed()
        .setColor('#f5b942')
        .setAuthor('DomiNATION Bot Admin commands list')
        .setDescription('Please note that all commands listed here require the `KICK_MEMBERS` permissions in order for them to run.')
        .addField('!addemote [emote name] [emote url]','This add\'s an emote to the !emote command.  \n\n*Example: !addemote laugh www.google.com/laughing.gif*')
        .addField('\u200b','\u200b')
        .addField('!deleteemote [emote name]','This removes an emote from the !emote command.  \n\n*Example: !deleteemote laugh*')
        .addField('\u200b','\u200b')
        .addField('!deleterule [rule type] [rule #]','This deletes a rule from the stored data list, but will not delete from #rules.  ]\n\n*Example:  !deleterule ark 13*')
        .addField('\u200b','\u200b')
        .addField('!editevent [event info]','This edits the !event command and posts to #announcements.  Recommend to copy the previous event list and base the new one off of that.  When running the command, just do !editevent then copy and paste your prefilled text in.  \n\n*Example:  !editevent Date:  Friday, August 2nd 2019 --- 1030PM Central ...*')
        .addField('\u200b','\u200b')
        .addField('!editrule [rule type] [rule #] [rule text]','This adds/edits the stored data for rules.  If it is a new rule, you must run !postrules after adding rule(s).  \n\n*Example:  !editrule ark 15 All noobs shall bow before Zaff.*')
        .addField('\u200b','\u200b')
        .addField('!editserveradmin [server #] [admin list]', 'This adds/edits the stored data for the admin tribe list.  If it is a new server, you must run !postrules after adding server(s).  \n\n*Example:  !editserveradmin 9 Tribe of Zaff, Zaff\'s Hobo Clan, Cydonia, Nursing home of Zaff*')
        .addField('\u200b','\u200b')
        .addField('!postrules','This will post the rules and admin tribe listing to #rules.  This only needs be ran if something is added to the existing data.')
        // .setTimestamp()
        // .setFooter(`Command list last updated on:`);
    message.channel.send(commandsEmbed);
    };