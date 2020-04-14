module.exports.run = async (bot, message, args) => {

  function query(str) {
    let splitStr = str.toLowerCase().split(' ').splice(1);
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join('_'); 
  }
  str = message.content
  let url = "https://ark.gamepedia.com/"+query(str);
  message.channel.send(url);
};