const Discord = require("discord.js");
const bot = new Discord.Client()
const config = require("./config.json");
const fs = require("fs");
const update = require("./update.json");
const tickets = require("./data/tickets.json")

bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    bot.commands.set(commandName, props);
  });
});


bot.on("ready", () => {
    console.log("I am ready!");
    bot.user.setActivity("Type !help");
  });


const events = {
	MESSAGE_REACTION_ADD: 'messageReactionAdd',
	MESSAGE_REACTION_REMOVE: 'messageReactionRemove',
};

bot.on('raw', async event => {
	if (!events.hasOwnProperty(event.t)) return;

	const { d: data } = event;
	const user = bot.users.get(data.user_id);
	const channel = bot.channels.get(data.channel_id) || await user.createDM();

	if (channel.messages.has(data.message_id)) return;

	const message = await channel.fetchMessage(data.message_id);
	const emojiKey = (data.emoji.id) ? `${data.emoji.name}:${data.emoji.id}` : data.emoji.name;
	let reaction = message.reactions.get(emojiKey);

	if (!reaction) {
		const emoji = new Discord.Emoji(bot.guilds.get(data.guild_id), data.emoji);
		reaction = new Discord.MessageReaction(message, emoji, 1, data.user_id === bot.user.id);
  }
  //This section below captures non-cached data
	if (message.channel.id === update.openTickets) {
	    const filter = (reaction, user) => 
      reaction.emoji.id === update.kakoen || reaction.emoji.id === update.alphy || reaction.emoji.id === update.kerra || 
      reaction.emoji.id === update.lavayla || reaction.emoji.id === update.nast || reaction.emoji.id === update.nell || 
      reaction.emoji.id === update.nuggy || reaction.emoji.id === update.stauro || reaction.emoji.id === update.zaff || 
      reaction.emoji.id === update.zylana || reaction.emoji.id === update.jrod || reaction.emoji.id === update.rekoj || 
      reaction.emoji.id === update.silver || reaction.emoji.id === update.crumpets || reaction.emoji.id === update.snow ||
      reaction.emoji.id === update.gronk || reaction.emoji.id === update.savage || 
      reaction.emoji.name === '❌';
      
      const collector = message.createReactionCollector(filter, {max: 2});
      collector.on('collect', r => {
      const closed_tickets = bot.channels.get(update.closedTickets);
      
        if (r.emoji.name === '❌') {
          closed_tickets.send(message.content).then(function (message) { message.react(r.emoji.name)});
        } else { closed_tickets.send(message.content).then(function (message) { message.react(r.emoji.id)}); }
        message.delete();
        let reactedUser = r.emoji.name;
        if(!tickets[reactedUser]) tickets[reactedUser] = {
          amount: 0,
        };
    var newReactions = tickets[reactedUser].amount++;
    newReactions;
    fs.writeFile("data/tickets.json", JSON.stringify(tickets), (err) => {
    if (err) console.log(err);
});
    })}
   //end of section 
	bot.emit(events[event.t], reaction, user);
});

bot.on("message", message => {
  if (message.content.startsWith(config.prefix)) {
    if (message.channel.type === "dm") return;
    var cont = message.content.toLowerCase().slice(config.prefix.length).split(" ");
    var args = cont.slice(1);
    var cmd = bot.commands.get(cont[0]);
    if (cmd) cmd.run(bot, message, args); 
  }

  //   if (message.content.includes('discord.gg/'||'discordapp.com/invite/')) {
  //     let content = message.content;
  //     let checkEmbed = new Discord.RichEmbed()
  //         //.setAuthor(message.author.username)
  //         .setColor("#ffffff")
  //         .setDescription("Someone has just posted an invite link.  This may or may not be malicious, but I am logging it for science purposes.")
  //         .setTimestamp()
  //         .addField("Author:", message.author.username)
  //         .addField("Message content:", content);
  //       bot.channels.get(update.closedTickets).send(checkEmbed);
  // }

    //This captures cached data and does not conflict with the code above.
    if (message.channel.id == update.openTickets) {
      const filter = (reaction, user) => 
      reaction.emoji.id === update.kakoen || reaction.emoji.id === update.alphy || reaction.emoji.id === update.kerra || 
      reaction.emoji.id === update.lavayla || reaction.emoji.id === update.nast || reaction.emoji.id === update.nell || 
      reaction.emoji.id === update.nuggy || reaction.emoji.id === update.stauro || reaction.emoji.id === update.zaff || 
      reaction.emoji.id === update.zylana || reaction.emoji.id === update.jrod || reaction.emoji.id === update.rekoj || 
      reaction.emoji.id === update.silver || reaction.emoji.id === update.crumpets || reaction.emoji.id === update.snow ||
      reaction.emoji.id === update.gronk || reaction.emoji.id === update.savage || 
      reaction.emoji.name === '❌';
      
      const collector = message.createReactionCollector(filter, {max: 2});
      collector.on('collect', r => {
      const closed_tickets = bot.channels.get(update.closedTickets);
      
        if (r.emoji.name === '❌') {
          closed_tickets.send(message.content).then(function (message) { message.react(r.emoji.name)});
        } else { closed_tickets.send(message.content).then(function (message) { message.react(r.emoji.id)}); }
        message.delete();
        let reactedUser = r.emoji.name;
        if(!tickets[reactedUser]) tickets[reactedUser] = {
          amount: 0,
        };
    var newReactions = tickets[reactedUser].amount++;
    newReactions;
    fs.writeFile("data/tickets.json", JSON.stringify(tickets), (err) => {
    if (err) console.log(err);
});
    })}
});

bot.on('error', console.error);

bot.login(config.token);