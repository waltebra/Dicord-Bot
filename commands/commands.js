module.exports = {
    name: 'commands',
    description: 'Creates an about embed for bots commands',
    execute(message, args, Discord, Emotes, Roles) {
        //Get files
        const fs = require('fs');
        let commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

        let command = require('commands.js');

        //Init the embed
        let commandEmbed = new Discord.MessageEmbed()
        .setTitle('Ouroboros Commands')
        .setColor('#000000')
        .setDescription('Hello, I am Ouroboros! Here are details of my available commands:')

        //Add fields to the embed
        commandFiles.forEach(file => {
            let fName = file.split('.')[0].toString();
            let fValue = "about this file";

            let field = {name: fName, value: fValue};

            commandEmbed.addFields(field);
        });

        message.channel.send({embeds: [commandEmbed]});
    }//closes execute
}//closes module