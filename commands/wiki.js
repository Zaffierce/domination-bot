const encode = require('strict-uri-encode');

module.exports.run = async (bot, message, args) => {

let q = encode(args.join(' '));
let link = `https://ark.gamepedia.com/index.php?search=${q}`;


if (!q) {
    message.channel.send(`Please include something to search for!\n*Example:\n!wiki element <-- to display information about Element\n!wiki link <-- to display the Ark Survival Evolved Wiki*`);
} else {
    if (q === "link") {
        message.channel.send(`https://ark.gamepedia.com/ARK_Survival_Evolved_Wiki`);
    } else {
message.channel.send(`${link}`);
}
}
};