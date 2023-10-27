const Discord = require('discord.js');
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_EMOJIS_AND_STICKERS', 'GUILD_INTEGRATIONS', 'GUILD_INVITES', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 
'GUILD_MESSAGE_REACTIONS', 'GUILD_MESSAGE_TYPING', 'GUILD_PRESENCES', 'GUILD_VOICE_STATES', 'GUILD_WEBHOOKS'] });

const prefix = '`';

//Declare relevant Emotes array
const Emotes = [
//{name: 'Yes', id: '<:yea:827713563124170773>'},
{name: 'Yes', id: '<:brother:1134172811053772914>'},
{name: 'No', id: '<:conway:1134175175852687602>'}
//{name: 'No', id: '<:nay:827713602759950376>'}
];

//Declare array of relevant roles
const Roles = [
    {name: 'Role1', id: '790706744988663829'},
    {name: 'Role2', id: '818947821831061545'},
    {name: 'Role3', id: '1086362913956171776'}
];

const fs = require('fs');

//Collect command files and set them
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

    //Get args and first command
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //Try command, catch error and issue a message
    try {
        client.commands.get(command).execute(message,args, Discord, Emotes, Roles);
    } catch(error) {
        console.error(error);
        message.reply("I do not recognize that command. You can use (`commands) to list my available commands.");
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
let key = require('./key.json');
client.login(key.content);