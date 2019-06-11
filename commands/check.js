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
    // console.log(mappedTop5.join("\n"));
    message.delete();
    const embed = new Discord.RichEmbed()
        .setAuthor(`Tickets closed by staff members...`)
        .setDescription(mappedTopTickets)
    // for(var i in tickets) {
    //     myArray = tickets[i]
    //     embed.addField(`${i}:`,`${myArray.amount}`, true)
    // }
    message.channel.send(embed);
};