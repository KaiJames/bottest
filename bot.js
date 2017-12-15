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

client.on('message',message => {
	if(message.content == '.list') {
		message.channel.send('---------------- Commands List ----------------');
		message.channel.send('.stats -- Show current radio stats.');
		sleep(500);
		message.channel.send('.list -- Shows this message.');
		message.channel.send('.about -- Information of BOT.');
		sleep(500);
		message.channel.send('.panel -- Panel link');
		sleep(1000);
		message.channel.send('.Kai -- Information about Kai');
		message.channel.send('.Beats -- Information about Codi');
		message.channel.send('.Codi -- Information about Codi');
		sleep(500);
	}
    
});
    
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
