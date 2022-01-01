const purge = require('../data/purge.json');
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    let modRole = message.member.hasPermission('KICK_MEMBERS');

    if (!modRole) return message.delete();
    else {
        let purgeLink = args[0];
        if (!purgeLink) return message.channel.send("Please include a message link");
        purge.link = purgeLink
        message.channel.send("Purge message link has been updated");
        fs.writeFile("data/purge.json", JSON.stringify(purge), (err) => {
            if (err) console.log(err);
        });
    }
    
//put code here

};