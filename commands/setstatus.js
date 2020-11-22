module.exports.run = async (bot, message, args) => {
  
  let modRole = message.member.hasPermission('KICK_MEMBERS');
  
  if(!modRole) {     
    message.delete();
  } else {
    const status = args.join(' ');
    bot.user.setActivity(status);
  }
};