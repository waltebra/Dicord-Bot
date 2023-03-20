const Discord = require('discord.js');
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_EMOJIS_AND_STICKERS', 'GUILD_INTEGRATIONS', 'GUILD_INVITES', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 
'GUILD_MESSAGE_REACTIONS', 'GUILD_MESSAGE_TYPING', 'GUILD_PRESENCES', 'GUILD_VOICE_STATES', 'GUILD_WEBHOOKS'] });

const prefix = '`';

const fs = require('fs');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
};

client.once('ready', () => {
    console.log('Ouroboros is online.')
});

client.on('messageCreate', message => {
    if(!checkIfRelevant(message)) return; //Do nothing if message is irrelevant

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    switch(command) {
        case 'ping':
            client.commands.get('ping').execute(message, args);
            break
        case 'vote':
            client.commands.get('vote').execute(message, args, Discord);
        break
        case 'rules':
            client.commands.get('rules').execute(message, args, Discord);
        break
        case 'about':
            client.commands.get('about').execute(message, args, Discord)
        break
    }
})

function checkIfRelevant (message) {
let result = Boolean;

    if(!message.content.startsWith(prefix) || message.author.bot) {
        result = false;
    } else result = true;

    return result;
};

//get key and use to login with last line of file//
client.login('');