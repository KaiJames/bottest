const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});



client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});

client.on('message', message => {
    if (message.content === '.Kai') {
    	message.channel.send('Kai is one of three Founders of Infinite! They do coding stuff and radio stuff too! They are a wired human who justs likes to have fun!');
  	}
});

client.on('message', message => {
if(message.content == '.Beats') {
	  message.channel.send('Beats is one of three Founders of Infinite, He is random, outgoing and knows what he is doing!');
	  
	  	}
});

client.on('message', message => {
if(message.content == '.Codi') {
	  message.channel.send('Codi is one of three Founders of Infinite, He smells thats all you need to know.');
	  
	  	}
});


client.on('message',message => {
	if(message.content == '.list') {
		message.channel.send('---------------- Commands List ----------------');
		message.channel.send('.stats -- Show current radio stats.');
		message.channel.send('.list -- Shows this message.');
		message.channel.send('.about -- Information of BOT.');
		message.channel.send('.panel -- Panel link');
		message.channel.send('.Kai -- Information about Kai');
		message.channel.send('.Beats -- Information about Beats');
		message.channel.send('.Codi -- Information about Codi');
	}
    
});

client.on('message',message => {
if(message.content == '.panel') {
	  message.channel.send('http://infiniteradio.net/staff \n Enjoy! :yum: ');
	  
  }

});
client.on('message',message => {
if(message.content == '.about') {
	  message.channel.send('------------------------- Information of Infinite BOT ------------------------- \n');
	 message.channel.send('Version : v1.0\n');
	 message.channel.send('Author : @Kai#8589\n');
	 message.channel.send('All rights reserved to respective owners. The Official bot of Infiniteradio.net');
  }
	});

client.on('message',message => {
if(message.content == '.coditruth') {
	  message.channel.send('He has a Small Peeni... >.> <.< shhhhh its a secret!!!!');
	  
  }

});


client.on('message',message => {
if(message.content == '.codex') {
	  message.channel.send('#couplegoals :heart_eyes:');
	  
  }

});

client.on('message',message => {

if(message.content == '.stats')		
var url = 'http://centauri.shoutca.st:8368/status-json.xsl';
var request = require('request');
request.get({
    url: url,
    json: true,
    headers: {'User-Agent': 'Infinite BOT '}
  }, (err, res, data) => {
    if (err) {
      console.log('Error:', err);
    } else if (res.statusCode !== 200) {
      console.log('Status:', res.statusCode);
    } else { 
	if(typeof data.icestats.source[1].title == 'undefined') {  
	  message.channel.send('Current Song: '+ data.icestats.source[0].title +  '\n');
      message.channel.send('Current DJ: Infinite Stream\n');
      message.channel.send('Listeners: '+ data.icestats.source[0].listeners +'\n');
      message.channel.send('Listener Peak of this user: '+ data.icestats.source[0].listener_peak +'\n');

      
	} else {
      // data is already parsed as JSON:
      message.channel.send('Current Song:'+ data.icestats.source[1].title +  '\n');
      message.channel.send('Current DJ:'+ data.icestats.source[1].genre +'\n');
      message.channel.send('Listeners: '+ data.icestats.source[1].listeners +'\n');
      message.channel.send('Listener Peak of this user: '+ data.icestats.source[1].listener_peak +'\n');
      message.channel.send('List of commands: say !list');
       }
       
});
    
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
