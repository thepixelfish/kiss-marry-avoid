// Load up the discord.js library
const Discord = require("discord.js");

// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`Bean Battle`);
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});




client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // Let's go with a few common example commands! Feel free to delete or change those.
  
  if(command === "kma") {
    //Finds three random characters and asks the server to react with their choice. 
    
    //array of characters 
    let characters = [
      {name: "character1", image: "./images/character1.jpg"},
      {name: "character2", image: "./images/character2.jpg"},
      {name: "character3", image: "./images/character3.jpg"}
    ];

    //shuffle the array so there are no duplicates
    let shuffle = characters.sort(function(){return .5 - Math.random() }).slice(0, 3);
    
    let person1 = shuffle[0];
    let person2 = shuffle[1];
    let person3 = shuffle[2];
    
    //message.channel.send(person.name);
    //message.channel.image(person.image);

    message.channel.send("Here are your Kiss/Marry/Avoid candidates!");
    message.channel.send("Who will you :kiss:? Who will you :ring:? Who will you :skull:? Add Reactions to vote!")

    //print character 1
    let msg1 = await message.channel.send(`${person1.name}:`, {
      file: person1.image 
    });
    
    await msg1.react("💋");
    await msg1.react("💍");
    await msg1.react("💀");

    //print character 2
    let msg2 = await message.channel.send(`${person2.name}:`, {
      file: person2.image 
    });

    await msg2.react("💋");
    await msg2.react("💍");
    await msg2.react("💀");

    //print character 3
    let msg3 = await message.channel.send(`${person3.name}:`, {
      file: person3.image 
    });

    await msg3.react("💋");
    await msg3.react("💍");
    await msg3.react("💀");

  }
});

client.login(config.token);