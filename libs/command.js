const Errors = require("./errors.js");

/**
 * TODO : add class command with getCommand and get Parameters
 **/
module.exports = {
    /**
     * Command class
     **/
    Command : class {
        /**
         * Default constructor
         * The command must not be undefined or empty
         * @throws CommandGenerationError if the Command is undefined
         * @throw CommandEmptyError if no command is passed and the string is empty
         **/
        constructor(commandStr) {
            if(commandStr == undefined) {
                throw new Errors.CommandGenerationError("Command undefined !");
            } else if (commandStr.trim().length == 0) {
                throw new Errors.CommandEmptyError("No command passed")
            } else {
                this.commandLine = commandStr;
            }
        }
        
        /**
         * Returns the command name
         **/
        getCommandName() {
            return this.commandLine.split(" ")[0];
        }
        
        /**
         * Returns the command parameters
         **/
        getCommandParameters() {
            var res = this.commandLine.split(" ");
            res.shift();
            return res;
        }
        
    }
}

