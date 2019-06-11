    const Discord = require("discord.js");
    const superagent = require("superagent");
    const cheerio = require("cheerio");

    module.exports.run = async (bot, message, args) => {
        // var url = "https://www.patreon.com/kakoen";
        // superagent
        // .get(url)
        // .end(function(err, response) {
        //     if (err) {
        //         return message.channel.send("Error");
        //     }                                                                Future project.
        // $ = cheerio.load(response.text)
        // $('div').each(function(i, element, res) {
        //     var className = element.attribs.class
        //     //console.log(className);
        //     if (className === 'sc-cSHVUG cpjZzK') {
        //         console.log(`Class name: ${className}`)
        //     }
        // })
        // })

    let embedPatreon = new Discord.RichEmbed()
        .setColor('#8500FF')
        .setTitle(`Kakoen87's Patreon`)
        .setURL('https://www.patreon.com/kakoen')
        .setThumbnail('https://cdn.discordapp.com/attachments/480355364613783566/570192827699560458/pirate-dilo-2_1.png')
        .setDescription(`We are DomiNATION, a beginner-friendly Ark: Survival Evolved community that also hosts a wide variety of other games.  Thanks to those that support us, we are able to run all of the Vanilla Ark maps.  In addition to those servers, we also host Conan: Exiles, Minecraft, 7 Days to Die and two Patreon only Ark servers.\n\nWe have a team of dedicated admins, who love the game as much as you do, and try to give everyone an awesome time on our servers in their spare time by organizing fun events.\n\nIf you wish to support us and join the family, click on this link here - https://www.patreon.com/kakoen`)
        .addBlankField()
        .addField(`DomiNATION Supporter - $5 USD`,`● Access to a supporters-only Discord channel\n● Access to supporters-only Ark servers (Ragnarok and Extinction)\n● Acknowledged with Supporter rank in Discord\n● Access to patreon-only events with exclusive prizes`)
        .addBlankField()
        .addField(`DomiNATION Supporter+ - $10 USD`,`● All of the above\n● 3-day headstart on all new PvE servers\n● Acknowledged with Supporter+ rank in Discord\n● **Ark: Survival Evolved** - Every month, get a max-level creature of your choice (PvE only) with insurance, do !patrequest for more info\n● **Conan: Exiles** - Every month, get a tier 3 fighter`)
        .addBlankField()
        .addField(`DomiNATION Supporter++ - $15 USD`,`● All of the above\n● Acknowledged with Supporter++ rank in Discord\n● Every 3 months spent as Patreon in this tier or higher, gain 7 days of "vacation."  Use these days to have admins reset timers and feed tames.  This can stack up to 4 weeks.`)
        .addBlankField()
        .addField(`DomiNATOR - $20 USD`,`● All of the above\n● Entry into the monthly raffle of a Steam game of winners choice up to $40\n● Acknowledged with a Blue name in Discord\n● **Conan: Exiles** - Instead of a tier 3 fighter ($10 reward), you can get a named (tier 4) thrall of choice`)
    message.channel.send(embedPatreon);
    };