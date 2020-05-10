# Kiss Marry Avoid Discord Bot

This discord bot allows you to easily play the old game of Kiss, Marry, Avoid with your friends. Relive your elementary school days online.

[I used this repo as a base to learn more about discord bots and discord.js. Check it out!](https://gist.github.com/eslachance/3349734a98d30011bb202f47342601d3)

## Setup
>If you do not already have a bot account, find a tutorial and make one! It's interesting and a lot of fun. I used [this tutorial](https://anidiots.guide/first-bot/your-first-bot). 

- Clone this repo into a folder somewhere on your computer.
- In the file called `config.json`, replace the `Your Token` text with your actual token.

Next, open a command prompt (or powershell!) in the same location as the files. Type in the following commands:

```
npm init -y
npm install discord.js@11.6.3
node index.js
```

With a little luck, your bot should start! 

## Adding Characters
>This bot relies on YOUR entries to play. You can add as many characters as you want. The bot will send three random entries every time. 

To add characters, open `index.js`. On line 61 you will see the following array:

```
    let characters = [
      {name: "character1", image: "./images/character1.jpg"},
      {name: "character2", image: "./images/character2.jpg"},
      {name: "character3", image: "./images/character3.jpg"}
    ];
```

Fill in the names of the characters you'd like to use. To add photos, create a folder called `images` in your bot folder. to make things easier, give the photo the same name as the corresponding character. Here is an example:

```
    let characters = [
      {name: "Miku", image: "./images/miku.jpg"},
      {name: "Cloud", image: "./images/cloud.jpg"},
      {name: "Obama", image: "./images/obama.jpg"}
    ];
```

>***NOTE*** You do not need to make a folder for the images. They can just be stored in the bot folder. If you choose to go down this sad, disorganized path, just remove '/images/' from the photo destination. 

This bot is not limited to only three characters. Add as many as you like! to do so, just add another entry to the array useing `{name: "character#", image: "./images/character#.jpg"}(,)`

## Using The Bot
To have the bot play the game, just enter `+kma` in your discord text channel. Your new bot should obey your command. Have fun!