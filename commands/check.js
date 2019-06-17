/*
    To do:  [ ]Organize data better, maybe throw into field
            [ ]Sum tickets
*/

const Discord = require("discord.js");
const tickets = require("../data/tickets.json");

module.exports.run = async (bot, message, args) => {
        
    const topTickets = Object.keys(tickets).sort(function(a,b){
        return tickets[b].amount-tickets[a].amount
    })
    const mappedTopTickets = topTickets.map(c => `**${c}** - ${tickets[c].amount}`);
    message.delete();
    const embed = new Discord.RichEmbed()
        .setAuthor(`Tickets closed by staff members...`)
        .setDescription(mappedTopTickets)
    message.reply("please check your DM's").then(d_msg => { d_msg.delete(10000);});;
    message.author.send(embed);
};