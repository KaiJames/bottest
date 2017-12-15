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
client.on('message',message => {
	if(message.content == '!list') {
		message.reply('---------------- Commands List ----------------');
		message.reply('!stats -- Show current radio stats.');
		sleep(500);
		message.reply('!list -- Shows this message.');
		message.reply('!about -- Information of BOT.');
		sleep(500);
		message.reply('!panel -- Panel link');
		sleep(1000);
		message.reply('!Kai -- Information about Kai');
		message.reply('!Beats -- Information about Codi');
		message.reply('!Codi -- Information about Codi');
		sleep(500);
	}
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
