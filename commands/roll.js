module.exports = {
    name: 'roll',
    description: 'Rolls a specified dice and adds a modifier (if applicable)',
    execute(message, args, Discord, Emotes, Roles) {
        //Get args (dice, modifier)
        let arguments = args.toString();
        arguments = arguments.split(',');
        let dice = Number(arguments[0]);
        let modifier = 0;

        if (!isNaN(Number(arguments[1]))) {
            modifier = Number(arguments[1]);
        }

        //check for valid args before rolling
        if (checkInput()) {
            let roll = Math.floor(Math.random() * dice) + 1;
            let result = roll + modifier;

            message.channel.send('The result of the dice roll is ' + result);
        }
        
        function checkInput() {
            if (isNaN(dice)) {
                message.channel.send('Please specifiy what sided dice to roll.');
                return false;
            } else if (isNaN(modifier) && arguments[1] != undefined) {
                message.channel.send('Please specifiy the modifer as a positive or negative number');
                return false;
            } else {
                
            return true;
            }
        }
    }//closes execute
}//closes module