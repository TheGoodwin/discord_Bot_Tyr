const Errors = require("./errors.js");
const Parameter = require("./parameter.js").Parameter;

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
         * @throws CommandEmptyError if no command is passed and the string is empty
         **/
        constructor(commandStr) {

          function parseCommandName(commandStr) {
            return commandStr.split(" ")[0];
          }

          function parseCommandParameters(commandStr) {
            var params = commandStr.split(" ");
            params.shift();
            var res = [];
            for (var i = 0; i < params.length; i++){
                let current = params[i];
                res.push(new Parameter(current));
            }
            return res;
          }

          if(commandStr == undefined) {
              throw new Errors.CommandGenerationError("Command undefined !");
          } else if (commandStr.trim().length == 0) {
              throw new Errors.CommandEmptyError("No command passed");
          } else {
              this.commandName = parseCommandName(commandStr);
              this.commandParameters = parseCommandParameters(commandStr);
          }
        }

        /**
         * Returns the command name
         **/
        getCommandName() {
            return this.commandName;
        }

        /**
         * Returns the command parameters
         **/
        getCommandParameters() {
            return this.commandParameters;
        }

    }
}
