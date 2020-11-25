module.exports.run = async (bot, message, args) => {

  let modRole = message.member.hasPermission('KICK_MEMBERS');
  
  if(!modRole) {     
    message.delete();
  } else {
    const status = message.content.split(' ').splice(1).join(' ');
    console.log(status);
    bot.user.setActivity(status);
  }
};