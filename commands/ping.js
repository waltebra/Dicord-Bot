module.exports= {
    name: 'ping',
    description: 'This is a testing ping command',
    execute(message, args){
        message.channel.send('pong');
    }
}