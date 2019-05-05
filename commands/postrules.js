const Discord = require("discord.js");
const arkRules = require('../data/arkRules.json');
const discordRules = require('../data/discordRules.json');
const patreonRules = require('../data/patreonRules.json');
const serverAdmins = require('../data/serverAdmins.json');

    module.exports.run = async (bot, message, args) => {
       // let whichRule = args[0].toLowerCase()
        let modRole = message.member.hasPermission('KICK_MEMBERS');

        if(!modRole) {     
            message.delete();
            console.log(message.author.username + " attempted to run a command that they don't have access to!");
        } else {
            //confirm check?
                let count = 0;
                message.channel.fetchMessages({limit: 100})
                 .then(messages => {
                   let messagesArr = messages.array();
                   let messageCount = messagesArr.length;
            
                   for(let i = 0; i < messageCount; i++) {
                     messagesArr[i].delete()
                      .then(function() {
                        count = count + 1;
                        if(count >= 100) {
                          deleteStuff();
                        }
                      })
                      .catch(function() {
                        count = count + 1;
                        if(count >= 100) {
                          deleteStuff();
                        }
                      })
                   }
                 }).then(function() {
                    const lineBreakEmbed = new Discord.RichEmbed()
                        .setColor('#000000')
                        .addBlankField();
                    const discordRulesEmbedHeader = new Discord.RichEmbed()
                        .setColor('#0099ff')
                        .setAuthor('DomiNATION Discord Rules')
                        .setDescription(`These are the rules for the DomiNATION Discord.  Please be aware that these may change at any time and also apply to DM's with members of this server.  Anything you say in a DM can and will be used against you if brought to the admin's with proof.`)
                        .setThumbnail('https://lh3.googleusercontent.com/_4zBNFjA8S9yjNB_ONwqBvxTvyXYdC7Nh1jYZ2x6YEcldBr2fyijdjM2J5EoVdTpnkA=w256');                    
                    message.channel.send(discordRulesEmbedHeader);
                        for(var i in discordRules) {
                        myArray = discordRules[i]
                    const discordRuleEmbed = new Discord.RichEmbed()
                        .setColor('#0099ff')
                        .addField(`Discord Rule #${i}`,`${myArray.ruleText}`);
                    message.channel.send(discordRuleEmbed);
                        }
                    message.channel.send(lineBreakEmbed);
                    const arkRuleEmbedHeader = new Discord.RichEmbed()
                        .setColor('#76FF33')
                        .setAuthor('DomiNATION Ark Rules')
                        .setDescription(`These are the rules for the DomiNATION Ark Cluster.  Please be aware that these may change at any time.  Anyone who breaks the following rules will be dealt with on a case by case basis and at full discretion of the admins, with varying degrees of punishment up to and including wipes/bans.`)
                        .setThumbnail('http://orig14.deviantart.net/2c5f/f/2015/311/3/5/ark_survival_evolved_icon_by_troublem4ker-d9fw57a.png');
                    message.channel.send(arkRuleEmbedHeader)
                        for(var i in arkRules) {
                        myArray = arkRules[i]
                    const arkRuleEmbed = new Discord.RichEmbed()
                        .setColor('#76FF33')
                        .addField(`Ark Rule #${i}`,`${myArray.ruleText}`);
                    message.channel.send(arkRuleEmbed);
                        }
                    message.channel.send(lineBreakEmbed);
                    const patreonRulesEmbedHeader = new Discord.RichEmbed()
                        .setColor('#8500FF')
                        .setAuthor('DomiNATION Ark Patreon Rules')
                        .setDescription(`These rules are for the DomiNATION Ark Patreon's only!  All rules posted above still apply, but with slight modification as follows.`)
                        .setThumbnail('https://cdn.discordapp.com/attachments/480355364613783566/570192827699560458/pirate-dilo-2_1.png');
                    message.channel.send(patreonRulesEmbedHeader);
                        for(var i in patreonRules) {
                            myArray = patreonRules[i]
                    const patreonRuleEmbed = new Discord.RichEmbed()
                        .setColor('#8500FF')
                        .addField(`Ark Patreon Rule #${i}`,`${myArray.ruleText}`);
                    message.channel.send(patreonRuleEmbed);
                        }
                    message.channel.send(lineBreakEmbed);
                    const serverAdminsEmbedHeader = new Discord.RichEmbed()
                        .setColor('#F6DD0F')
                        .setAuthor('Ark Admin Tribe Names')
                        .setDescription(`The following is a full list of the current ARK admins and their tribes on eachserver.  This is a point of reference for Ark Rule #6.`)
                        .setThumbnail('https://cdn.discordapp.com/attachments/566853064967847946/570453800129658892/e4d52f4d69d7bba67e5fd70ffe26b70d.png');
                    message.channel.send(serverAdminsEmbedHeader);
                        for(var i in serverAdmins) {
                            myArray = serverAdmins[i]
                    const serverAdminsEmbed = new Discord.RichEmbed()
                        .setColor('#F6DD0F')
                        .addField(`Ark Server #${[i]}`,`${myArray.serverAdminList}`);
                    message.channel.send(serverAdminsEmbed);
                        }
                    message.channel.send(lineBreakEmbed);
                    const gamingPointSystemEmbedHeader = new Discord.RichEmbed()
                        .setColor('#f44242')
                        .setAuthor('DomiNATION Gaming Point System 2.0')
                        .setDescription(`This is the guidelines by which the Admin's follow when issuing punishments.  This is public to make it known to all, so each punishment is fair and just.  Points are accumulated by breaking the rules, each violation of a rule gains a player(s) points depending on severity and times occured.  Punishments are handed down based on how many points a player(s) has, based on the following guide:`)
                        .setThumbnail('https://cdn.discordapp.com/attachments/566853064967847946/572723585840447499/ban-hammer-ol-512.png')
                        .addBlankField()
                        //.addField(`0 points`, `No action taken`)
                        .addField(`1 - 3 points`,`Warning issued`)
                        .addField(`4 - 6 points`,`No element rewarded from events for 30 days`)
                        .addField(`7 - 8 points`,`3 day server ban`)
                        .addField(`9 - 12 points`,`Cluster ban, with the option to appeal in 6 months`)
                        .addField(`12+ points`,`Permanent cluster ban with no option to appeal`);
                    message.channel.send(gamingPointSystemEmbedHeader);
                    const gamingPointSystemEmbed1 = new Discord.RichEmbed()
                        .setColor('#f44242')
                        .addField(`Point System Notes:`,`● A player may submit a ban appeal 6 months after their ban by filling out the request form found by typing !help`)
                        .addField(`\u200B`,`● Bans are all encompassing, and include any/all games the player(s) in question play, and may also include Discord. Points fall off at a rate of 3 points every 30 days.`)
                        .addField(`\u200B`,`● First time offenders are given a warning, and 30 day probation, but no points. Any additional violations during this 30 day probation period will count as a second offense and points will be given.`)            
                        .addField(`\u200B`,`● A publicly viewable database, showing all current players from all games/servers that have points, as well as the number of points they have and what the points were earned for, can be viewable here - https://docs.google.com/spreadsheets/d/1HtqVVlqs4WhDAe5IZ0QYaKErSXEmaxEgDbvK9qw6jX0/edit?usp=sharing. Those who break the rules will be put on display for everyone here to shame and be aware of the things they have done.`);
                        //.addField(`\u200B`,`● Points are combined across all games, servers, and include the Discord. Breaking a rule on an ARK server, the Conan server, and in the Discord would be 3 violations, and would earn the person(s) 9 points.`);
                    const gamingPointSystemEmbed2 = new Discord.RichEmbed()
                        .setColor('#f44242')
                        //.addField(`\u200B`,`● Any player(s) who collect nine (9) points or more and have received a permanent ban may file a ban appeal. However, they must wait six (6) months after their ban date before such an appeal will even be looked at. Any ban appeals made before this time are to be discarded and ignored.`)
                        //.addField(`\u200B`,`● A publicly viewable database, showing all current players from all games/servers that have points, as well as the number of points they have and what the points were earned for, can be viewable here - https://docs.google.com/spreadsheets/d/1HtqVVlqs4WhDAe5IZ0QYaKErSXEmaxEgDbvK9qw6jX0/edit?usp=sharing. Those who break the rules will be put on display for everyone here to shame and be aware of the things they have done.`);
                    message.channel.send(gamingPointSystemEmbed1);
                    //message.channel.send(gamingPointSystemEmbed2);
                    
                    //footer
                    const footerEmbed = new Discord.RichEmbed()
                        .setColor('#000000')
                        .setTimestamp()
                        .setFooter(`Posted on`);
                    message.channel.send(footerEmbed);
                    })//end posting rules
                }
    };
