const encode = require('strict-uri-encode');
const cheerio = require('cheerio');
const superagent = require('superagent')

module.exports.run = async (bot, message, args) => {

    function query(str) {
    var splitStr = str.toLowerCase().split(' ').splice(1);
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join('_'); 
    }
    str = message.content

    var url = "https://ark.gamepedia.com/"+query(str);
    message.channel.send(url);
    //     superagent
    //     .get(url)
    //     .end(function(err, response) {
    //         if (err) {
    //             return message.channel.send(`Unable to query data:  ${url}`);
    //         }
    //     $ = cheerio.load(response.text)
    //     $('div').each(function(i, element, res) {
    //         var className = element.attribs.class
    //         //console.log(className);
    //         // if (className !== ('infobox' || 'info-arkitex info-framework')) {
    //         //     message.channel.send("Something new: "+url)
    //         // }
    //         // if (className === 'infobox') {
    //         //     console.log(`Item ClassName: ${className}`)
    //         //     message.channel.send("Item Class: "+url)
    //         // }
    //         // if (className === 'info-arkitex info-framework') {
    //         //     console.log(`Dino ClassName: ${className}`)
    //         //     message.channel.send("Dino Class: "+url)
    //         // }            
    //     })
    //     })


    // let q = encode(args.join(' '));
    // let link = `https://ark.gamepedia.com/index.php?search=${q}`;


    // if (!q) {
    //     message.channel.send(`Please include something to search for!\n*Example:\n!wiki element <-- to display information about Element\n!wiki link <-- to display the Ark Survival Evolved Wiki*`);
    // } else {
    //     if (q === "link") {
    //         message.channel.send(`https://ark.gamepedia.com/ARK_Survival_Evolved_Wiki`);
    //     } else {
    // message.channel.send(`${link}`);
    // }
    //}
};