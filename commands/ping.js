module.exports= {
    name: 'ping',
    description: 'This is a testing ping command, \n Requires no arguments',
    execute(message, args, Discord, Emotes, Roles){
        message.channel.send('pong');
    }
}