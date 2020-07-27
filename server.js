const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://brodc12.glitch.me/`);
}, 280000);

// كل البكجات الي ممكن تحتجها في اي بوت 
const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const {TOKEN, YT_API_KEY, prefix, devs} = require('./config')
const client = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');
client.on('ready', () => { 
  console.log(`Logged in as ${client.user.tag}!`);
});
 

 //كود للتجربة 







//جميع حقوق البوت محفوضة لدى بترولي
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`$help`)
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);//جميع حقوق البوت محفوضة لدى بتورلي
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);//جميع حقوق البوت محفوضة لدى بترولي
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')//جميع حقوق البوت محفوضة لدى بترولي
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')//جميع حقوق البوت محفوضة لدى بترولي
  console.log('')
  console.log('')
});


//جميع حقوق البوت محفوضة لدى بترولي





client.on("message", message => {

            if (message.content.startsWith(prefix + "obc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); //جميع حقوق البوت محفوضة لدى بترولي
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);//جميع حقوق البوت محفوضة لدى بترولي
})//جميع حقوق البوت محفوضة لدى بترولي
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     //جميع حقوق البوت محفوضة لدى بترولي
});//جميع حقوق البوت محفوضة لدى بترولي





client.on("message", message => {//جميع حقوق البوت محفوضة لدى بترولي

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {//جميع حقوق البوت محفوضة لدى بترولي
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});//جميع حقوق البوت محفوضة لدى بترولي


client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {//جميع حقوق البوت محفوضة لدى بترولي
     message.channel.send('**The Message Was Sent On Private**')
	
		 
//جميع حقوق البوت محفوضة لدى يوسف

 message.author.sendMessage(`
 **
╔[❖════════════❖]╗
                 Prefix = ' $ '
╚[❖════════════❖]╝
╔[❖════════════❖]╗
                      Commands
╚[❖════════════❖]╝

[❖═════════════════════════════❖]

 ❖ ${prefix}bc <message> ➾ Message All Members In Server

 ❖ ${prefix}obc <message> ➾ Message To Online Members

 ❖ ${prefix}ebc <message>  ➾ Embed Broadcast

 ❖ ${prefix}rbc <message> ➾ Message To Who Have Role


 ❖ ${prefix}bot ➾ Info Bot


 ❖ ${prefix}ping ➾ Test My Ping


 
**


`);

    }
});



//جميع حقوق البوت محفوضة لدى بترولي




 

//جميع حقوق البوت محفوضة لدى بترولي




//جميع حقوق البوت محفوضة لدى بترولي



client.on('message', message => {
  if(!message.channel.guild) return;
if (message.content.startsWith('$ping')) {//جميع حقوق البوت محفوضة لدى بترولي
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(client.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor('RANDOM')
.addField('**Time Taken:**',msg + " ms 📶 ")
.addField('**Discord API:**',api + " ms 📶 ")
message.channel.send({embed:embed});
}
});























client.on('message', message => { 
    if (message.content.startsWith(prefix + "bot")) { 
    message.channel.send({ //جميع حقوق البوت محفوضة لدى بترولي
        embed: new Discord.RichEmbed() 
            .setAuthor(client.user.username,client.user.avatarURL) 
            .setThumbnail(client.user.avatarURL) 
            .setColor('RANDOM') 
            .setTitle('Info TheJokar Bots.') 
            .addField('**My Ping**' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true) 
            .addField('**RAM Usage**', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true) 
            .addField('**Servers**', [client.guilds.size], true) 
            .addField('**Channels**' , `[ ${client.channels.size} ]` , true) 
            .addField('**Users**' ,`[ ${client.users.size} ]` , true) 
            .addField('**My Name**' , `[ ${client.user.tag} ]` , true) 
            .addField('**My ID**' , `[ ${client.user.id} ]` , true) 
            .addField('**DiscordJS**' , `[ ${Discord.version} ]` , true) 
            .addField('**NodeJS**' , `[ ${process.version} ]` , true) 
            .addField('**Arch**' , `[ ${process.arch} ]` , true) 
            .addField('**Platform**' , `[ ${process.platform} ]` , true) 
                  .addField('**My Prefix**' , `[ ${prefix} ]` , true) 
                  .addField('**My Language**' , `[ Java Script ]` , true)
                  .setFooter('${client.user.tag}') 
    }) 
} 
}); 



client.on('message' , message => {//جميع حقوق البوت محفوضة لدى بترولي
      if(message.author.bot) return;
     
      if(message.content.startsWith(prefix + "rbc")) {//جميع حقوق البوت محفوضة لدى بترولي
        if (!message.member.hasPermission("ADMINISTRATOR"))  return;
        let args = message.content.split(" ").slice(2);
     var codes = args.join(' ')
       
        if(!codes) {
          message.channel.send("Try $help")
            return;
        }
     
     
              var role = message.mentions.roles.first();
                if(!role) {
                  message.reply("I CAnot Find TheRole")
                    return;
                }
            message.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {
              n.send(
              "**" + "السيرفر :" + "\n" +
              `${message.guild.name}` + "\n" +
              "المرسل :" + "\n" +
              `${message.author.tag}` + "\n" +
              "الرسالة :" + "\n" +
              `${codes}` + "**"
              )
            })
            message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عضو`)
        }
    });
	
	
	
	
    client.on('message', message => {
	    var prefix = "$";
              if(!message.channel.guild) return;
    if(message.content.startsWith(prefix + 'ebc')) {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**You Dont Have perms** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "Speed Bot";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**Write Some Things To Broadcast**');message.channel.send(`**Are You Sure \nThe Broadcast: ** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))
    
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    
    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
 reaction1.on("collect", r => {
    message.channel.send(`**☑ | Done ... The Broadcast Message Has Been Sent To __${message.guild.members.size}__ Members**`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
  
  var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Broadcast')
       .addField('Server', message.guild.name)
       .addField('Sender', message.author.username)
       .addField('Message', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });






client.on('message',async message => {
  if(message.content.startsWith("$voice")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
  message.channel.send('**تم عمل الروم بنجاح**');
  message.guild.createChannel(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });//جميع حقوق البوت محفوضة لدى بترولي
    setInterval(() => {
      c.setName(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]`)
    },1000);
  });
  }//جميع حقوق البوت محفوضة لدى بترولي
});





//جميع حقوق البوت محفوضة لدى بترولي






client.login(process.env.BOT_TOKEN);
