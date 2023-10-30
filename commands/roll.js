module.exports = {
    name: 'roll',
    description: 'Rolls a specified dice and adds a modifier (if applicable) \n Requires what sided dice to roll. \n Also accepts an optional modifier and multiplier.',
    execute(message, args, Discord, Emotes, Roles) {
        //Get args (dice, modifier)
        let arguments = args.toString().split(',');
        //arguments = arguments.split(',');

        //Make sure that modifier is a number
        let dice = Number(arguments[0]);
        let modifier = 0;
        if (!isNaN(Number(arguments[1]))) {
            modifier = Number(arguments[1]);
        }

        //check for valid args before rolling
        if (checkInput()) {
            let roll = Math.floor(Math.random() * dice) + 1;
            let result = roll + modifier;
            let modString = "";

            if (modifier < 0) {
                modString = ' - ';
            } else {
                modString = ' + '
            };
            modString += Math.abs(modifier);

            message.channel.send('The result of the dice roll is ' + result + '\n(' + roll  + modString + ')');
        }
        
        function checkInput() {
            if (isNaN(dice) || dice < 0) {
                message.channel.send('Please specifiy what sided dice to roll (Any Number > 0).');
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