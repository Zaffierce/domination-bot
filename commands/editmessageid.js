const Discord = require("discord.js");
const arkRules = require('../data/arkRules.json');
const discordRules = require('../data/discordRules.json');
const patreonRules = require('../data/patreonRules.json');
const serverAdmins = require('../data/serverAdmins.json');
    
    module.exports.run = async (bot, message, args) => {
        message.delete();
        let message_id = args[0];
            if (message_id === "help") { return message.channel.send("The proper syntax for this command is as follows.\n\n*!editmessageid [messageid] [rule_section] [rule_number] [rule_content]*\n**Example**: !editmessageid 570220800607649807 ark 1 Be respectful to others at all times!\n\nTo obtain [messageid], click on the three vertical dots on the right hand side of a message and click on 'Copy ID'");
            }
        let rule_section = args[1];
        let rule_number = args[2];
        let fields_id = 0;

            if (rule_section === "ark") {
                let content = arkRules[rule_number].ruleText
                const embed = new Discord.RichEmbed()
                .setColor('#76FF33')
                .addField(`Ark Rule #${rule_number}`,`${content}`)       
            let embedObjectID = Object.assign({}, embed.fields[fields_id]);
            embedObjectID.value = content;
            const newEmbed = new Discord.RichEmbed({
                color: embed.color,
                fields: [embedObjectID],
            });
            message.channel.fetchMessage(message_id).then(message => message.edit(newEmbed))
            }

            if (rule_section === "discord") {
                let content = discordRules[rule_number].ruleText
                const embed = new Discord.RichEmbed()
                .setColor('#0099ff')
                .addField(`Discord Rule #${rule_number}`,`${content}`)       
            let embedObjectID = Object.assign({}, embed.fields[fields_id]);
            embedObjectID.value = content;
            const newEmbed = new Discord.RichEmbed({
                color: embed.color,
                fields: [embedObjectID],
            });
            message.channel.fetchMessage(message_id).then(message => message.edit(newEmbed))
            }
            if (rule_section === "patreon") {
                let content = patreonRules[rule_number].ruleText
                const embed = new Discord.RichEmbed()
                    .setColor('#8500FF')
                    .addField(`Ark Patreon Rule #${rule_number}`,`${content}`)       
                let embedObjectID = Object.assign({}, embed.fields[fields_id]);
                embedObjectID.value = content;
                const newEmbed = new Discord.RichEmbed({
                    color: embed.color,
                    fields: [embedObjectID],
                });
            message.channel.fetchMessage(message_id).then(message => message.edit(newEmbed))
            }
            if (rule_section === "admin") {
                let content = serverAdmins[rule_number].serverAdminList
                const embed = new Discord.RichEmbed()
                    .setColor('#F6DD0F')
                    .addField(`Ark Server #${rule_number}`,`${content}`)       
                let embedObjectID = Object.assign({}, embed.fields[fields_id]);
                embedObjectID.value = content;
                const newEmbed = new Discord.RichEmbed({
                    color: embed.color,
                    fields: [embedObjectID],
                });
            message.channel.fetchMessage(message_id).then(message => message.edit(newEmbed))
            }
            // if (rule_section !== "ark" || rule_section !== "discord" || rule_section !== "patreon") {
            //     return message.channel.send("This rule_section does not exist, please try again.");
            // } //Returns message even though the text is said if NOT.  Hm.
    };