const Discord = require('discord.js');
const client = new Discord.Client();

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.login(process.env.token);
