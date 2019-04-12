module.exports.run = async (bot, message, args) => {
        
    message.channel.send({
  "embed": {
    "color": 3447003,
    "author": {
        "name": "DomiNATION help commands",
        "icon_url": "http://i.imgur.com/UC61Xdr.png"
    },
    "fields": [
              { "name": "**!commands**:", "value": "This provides the commands available for the DomiNATION bot, what you are reading currently." },
              { "name": "**!emote**", "value": "This is a fun command to display emotes!" },
              { "name": "**!help**:", "value": "This provides information for Support Requests." },
              { "name": "**!patreon**:", "value": "This provides information on how to be a Patreon for us!" },
              { "name": "**!patrequest**:", "value": "This can assist Patreon's when they submit their monthly requests." },
              { "name": "**!request**:", "value": "This provides information for Support Requests." },
              { "name": "**!support**:", "value": "This provides information for Support Requests." },
              { "name": "**!ticket**:", "value": "This provides information for Support Requests." },
              { "name": "**!website**:", "value": "This provides the link to the DomiNATION website." },
              { "name": "**!whitelist:", "value": "This provides information for Patreon's on how to become Whitelisted."}
    ]
  }
            })

    };
    
    module.exports.config = {
        command: "help"
    }