const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete();

    const commandsEmbed = new Discord.RichEmbed()
        .setColor('#BABABA')
        .setAuthor('DomiNATION Bot commands list')
        .addField(`!breeder`,`This provides information for Jezera's DomiNATION Breeding Project.`)
        .addField(`!emote`,`Fun little emote command.  Type !emote for more information.`)
        .addField(`!events`,`This provides the upcoming scheduled events for the DomiNATION Ark Servers.`)
        .addField(`!help`,`This provides information if you require assistance from the Admins.`)
        .addField(`!patreon`,`This provides the Patreon information.`)
        .addField(`!patrequest`,`This provides basic information for Ark's monthly Patreon dino claim.`)
        .addField(`!steamfavorite`,`This provides the steps to favorite our servers using the Steam Server Browser.`)
        .addField(`!rule [#]`,`This provides an Ark rule dependant to the number you provide: !rule 1 will display Ark Rule #1.`)
        .addField(`!website`,`This provides the DomiNATION website link.`)
        .addField(`!whitelist`,`This provides whitelisting steps for new Patreons.`)
        .addField(`!wiki [query]`,`This searches the Ark Survival Evolved Wiki.`)
        .setTimestamp()
        .setFooter(`Command list last updated on:`);
    message.channel.send(commandsEmbed);
    };