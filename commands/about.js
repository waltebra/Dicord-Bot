module.exports = {
    name: 'about',
    description: 'Creates an about embed for bot information. \n Requires no Arguments',
    execute(message, args, Discord, Emotes, Roles) {
        
        let json = require('../package.json');

        const aboutEmbed = new Discord.MessageEmbed()
        .setTitle('About Ouroboros')
        .setColor('#000000')
        .setDescription('Hello, I am Ouroboros!')
        .addFields(
            {name: 'Created', value: "I was created by Brady, or Discord user " + `<@535662684536963073>`},
            {name: 'Uses', value: 'To help automate server processes. Voting, displaying rules, etc. Type [`commands] to learn more!'},
            {name: 'Version Information', value: 'I am version ' + json.version}
        );

        message.channel.send({embeds: [aboutEmbed]});
    }//closes execute
}//closes module