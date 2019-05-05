const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete();
    let userID = message.author.id

    if (userID === "143840467312836609") {
        message.channel.send(args.join(' '));
    } else {
        console.log(message.author.username + " attempted to run the secretme command.")
    }

};