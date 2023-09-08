module.exports= {
    name: 'ping',
    description: 'This is a testing ping command',
    execute(message, args, Discord, Emotes, Roles){
        message.channel.send('pong');
    }
}