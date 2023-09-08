module.exports = {
    name: 'rules',
    description: 'Creates a rules embed for the server rules',
    execute(message, args, Discord, Emotes, Roles) {
        
const rulesEmbed = new Discord.MessageEmbed()
.setTitle('Welcome to the Gungle!')
.setColor('#FFFFFF')
.setDescription('The rules for the server are as follows:')
.addFields(
    {name: 'Rule 1', value: 'No Racism, Sexism, or Homophobia. Be respectful to one another.'},
    {name: 'Rule 2', value: 'No threats of violence to members of the server.'},
    {name: 'Rule 3', value: 'Respect one anothers privacy.'},
    {name: 'Rule 4', value: 'Use discretion when sending inappropriate materials. No pornography.'}
)
.setImage('https://files.worldwildlife.org/wwfcmsprod/images/Mountain_Gorilla_Silverback_WW22557/story_full_width/36fcoamev0_Mountain_Gorilla_Silverback_WW22557.jpg');

        message.channel.send({embeds: [rulesEmbed]});
    }//closes execute
}//closes module