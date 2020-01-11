const Discord = require("discord.js");

const client = new Discord.Client();

const config = require("./config.json");

ot.on("ready", function () {
 bot.user.setGame(`Hi, Je suis la pour foutre la merde..`);
 console.log(`${bot.user.username} is Ready!`);
});


bot.login(process.env.TOKEN);
