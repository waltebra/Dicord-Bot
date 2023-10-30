module.exports = {
    name: 'commands',
    description: 'Creates an about embed for bots commands \n Requires no arguments.',
    execute(message, args, Discord, Emotes, Roles) {
        //Get files
        const fs = require('fs');
        let commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

        commandFiles.forEach(file => {
        })



        //Init the embed
        let commandEmbed = new Discord.MessageEmbed()
        .setTitle('Ouroboros Commands')
        .setColor('#000000')
        .setDescription('Hello, I am Ouroboros! Here are details of my available commands:')

        //Add fields to the embed
        commandFiles.forEach(file => {
            let command = require('./' + file);
            let field = {name: command.name, value: command.description};

            commandEmbed.addFields(field);
        });

        message.channel.send({embeds: [commandEmbed]});
    }//closes execute
}//closes module