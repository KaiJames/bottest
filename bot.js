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
	if(message.author.bot){ return;}
	console.log('Message from ' + message.author.username + '#'+ message.author.discriminator + '\n Saying: ' + message.content);
	if(message.content == '!list') {
		message.channel.sendMessage('---------------- Commands List ----------------');
		message.channel.sendMessage('!stats -- Show current radio stats.');
		sleep(500);
		message.channel.sendMessage('!list -- Shows this message.');
		message.channel.sendMessage('!about -- Information of BOT.');
		sleep(500);
		message.channel.sendMessage('!panel -- Panel link');
		sleep(1000);
		message.channel.sendMessage('!Kai -- Information about Kai');
		message.channel.sendMessage('!Beats -- Information about Codi');
		message.channel.sendMessage('!Codi -- Information about Codi');
		sleep(500);
	}
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
