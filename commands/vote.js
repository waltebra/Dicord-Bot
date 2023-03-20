module.exports = {
    name: 'vote',
    description: 'Creates a vote for users to react to',
    execute(message, args, Discord) {

    let author = message.author;

    if(message.member.roles.cache.has('790706744988663829') || message.member.roles.cache.has('818947821831061545') || /*test */ message.member.roles.cache.has('1086362913956171776')) {
        if (args.length != 0) {
            sendVote();
            } else {
                message.channel.send(`<@${author.id}>` + ", please supply vote content like ['vote No more Pizza!].");
            }
        } else { 
            message.channel.send("Sorry, " + `<@${author.id}>` + " you do not have the proper permissions to call a vote.");
        }//closes if

        //sends vote
        function sendVote() {
            message.channel.send("Attention all " + `<@&790706744988663829>` + ' and ' + `<@&818947821831061545>`  + "! A new vote has been called!");

            let initiator = author.username;
            let avatar = "https://cdn.discordapp.com/avatars/" + `${author.id}` + "/" + `${author.avatar}` + ".png";
            let voteContent = args.toString();
            voteContent = voteContent.replaceAll(',',' ');
            
            let votesY = '1';
            let votesN  = '2';
            let votesR  = '3';
            let voteStatus = 'Passed!';
        
                voteEmbed = new Discord.MessageEmbed()
                .setTitle('VOTE')
                .setThumbnail(avatar)
                .setAuthor(
                    {name: initiator}
                )
                .addFields(
                    {name: 'Yes Votes', value: votesY, inline: true},
                    {name: 'No Votes', value: votesN, inline: true},
                    {name: 'Votes Remaining', value: votesR,  inline: true},
                    {name: 'Vote Status', value: voteStatus}
                )
                .setColor('#ff0000')
                .setDescription(voteContent)
                .setImage('https://wpsu.psu.edu/wp-content/themes/wpsu/images/vote/vote.png');

            message.channel.send({embeds: [voteEmbed]});
        }
    }//closes execute
}//closes module