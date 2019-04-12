module.exports.run = async (bot, message, args) => {
    const tickets = require("../data/tickets.json");
    message.delete();    
    for(var i in tickets) {
        myArray = tickets[i]
        message.channel.send("["+i+"]" + " has closed ["+myArray.amount+"] tickets.")
    }};