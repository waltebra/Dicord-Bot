module.exports = {
    name: 'vote',
    description: 'Creates a vote for users to react to',
    execute(message, args, Discord, Emotes, Roles) {

        let author = message.author;

        let yes = Emotes.find(item => item.name == 'Yes').id;
        let no = Emotes.find(item => item.name == 'No').id;

        //check if user is eligible to send a vote
        if(checkRoles(message.member)) {
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
            
            let votesY = '0';
            let votesN  = '0';
            let votesR  = '0';
            let voteStatus = 'Passed!';
        
                voteEmbed = new Discord.MessageEmbed()
                .setTitle('VOTE')
                .setThumbnail(avatar)
                .setAuthor({name: initiator})
                .addFields(
                    {name: 'Yes Votes', value: votesY, inline: true},
                    {name: 'No Votes', value: votesN, inline: true},
                    {name: 'Votes Remaining', value: votesR,  inline: true},
                    {name: 'Vote Status', value: voteStatus}
                )
                .setColor('#ff0000')
                .setDescription(voteContent)
                .setImage('https://wpsu.psu.edu/wp-content/themes/wpsu/images/vote/vote.png');

            message.channel.send({embeds: [voteEmbed]}).then(embedMessage =>  {
                reactions(embedMessage);
                //collector(embedMessage, Discord, Emotes, Roles);
            });
        }

        async function reactions(voteMessage) {
            await voteMessage.react(yes);
            await voteMessage.react(no);
        }

        function checkRoles(user) {
            let result = false;

            for (let i = 0; i < Roles.length; i++) {
                if (user.roles.cache.has(Roles[i].id)) {
                    result = true;
                }
            }
                
            return result;
        }

        //Begin collector
        function collector() {
         //https://discordjs.guide/popular-topics/collectors.html#await-messages   
        }
    }//closes execute
}//closes module