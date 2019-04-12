module.exports.run = async (bot, message, args) => {
    
message.delete();
message.channel.send(args.join(' '));

};