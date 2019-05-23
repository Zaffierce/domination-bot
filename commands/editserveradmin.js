const Discord = require("discord.js");
const serverAdmins = require('../data/serverAdmins.json');
const fs = require("fs");
const update = require('../update.json');

    module.exports.run = async (bot, message, args) => {
    
    let serverNumber = args[0];    
    let serverAdminList = message.content.split(' ').splice(2).join(' ');
    let modRole = message.member.hasPermission('KICK_MEMBERS');
    if(!modRole) {     
        message.delete();
        console.log(message.author.username + " attempted to run a command that they don't have access to!");
        } else {
            let channel = bot.channels.get(update.rules);
            let announcements = bot.channels.get(update.announcements);
            if(!args[0] || !serverAdminList) { return message.channel.send("Please check your command and try again.\n**Example:** !beditserveradmin 1 Zaff, so this makes Zaff the only tribe on ISLAND.") }
            message.delete();
            if (!serverAdmins[serverNumber]) serverAdmins[serverNumber] = {
                serverAdminList: "",
                serverNum: "",
                messageID: "none"
            };
            let wserverAdminList = serverAdmins[serverNumber].serverAdminList;
            var newText = serverAdmins[serverNumber].serverAdminList = serverAdminList;
            var newNum = serverAdmins[serverNumber].serverNum = serverNumber;
            newText;
            newNum;
            
            if (serverAdmins[serverNumber].messageID === "none") {
                const embed = new Discord.RichEmbed()
                    .setColor(`#F6DD0F`)
                    .addField(`Ark Server #${serverNumber}`, `${serverAdminList}`);
                message.channel.send("Adding new Server Admin list.  This will not appear until !postrules has been ran.");
                message.channel.send(embed);
                console.log(`${message.author.username} just edited server #${serverNumber} admin list.`);
                fs.writeFile("data/serverAdmins.json", JSON.stringify(serverAdmins), (err) => {
                    if (err) console.log(err);
                });
            } else {
                const oldEmbed = new Discord.RichEmbed()
                    .setColor(`#F6DD0F`)
                    .addField(`Ark Server #${serverNumber}`,`${wserverAdminList}`);
                announcements.send("A change has been made to the Server Admin List!");
                announcements.send("**OLD LIST**");
                announcements.send(oldEmbed).then(function() {
                    var newText = serverAdmins[serverNumber].serverAdminList = serverAdminList;
                    var newNum = serverAdmins[serverNumber].serverNum = serverNumber;
                    newText;
                    newNum;
                    const embed = new Discord.RichEmbed()
                        .setColor(`#F6DD0F`)
                        .addField(`Ark Server #${serverNumber}`,`${wserverAdminList}`);
                    let embedObjectID = Object.assign({}, embed.fields['0']);
                    embedObjectID.value = serverAdminList;
                    const newEmbed = new Discord.RichEmbed({
                        color: embed.color,
                        fields: [embedObjectID],
                    });
                    let serverListID = serverAdmins[serverNumber].messageID;
                    channel.fetchMessage(serverListID).then(message => message.edit(newEmbed));
                    announcements.send("**NEW LIST**");
                    announcements.send(newEmbed);
                });
                console.log(`${message.author.username} just edited server #${serverNumber} admin list.`);
                fs.writeFile("data/serverAdmins.json", JSON.stringify(serverAdmins), (err) => {
                    if (err) console.log(err);
                });
            }
        }
    };