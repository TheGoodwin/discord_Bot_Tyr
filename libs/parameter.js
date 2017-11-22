const Errors = require("./errors.js");

module.exports = {
    /**
     * Parameter class
     **/
    Parameter : class {
        /**
         * Default constructor
         * The parameter must not be undefined or empty
         * @throws CommandGenerationError if the parameter is undefined
         * @throw CommandEmptyError if no parameter is passed and the string is empty
         **/
        constructor(parameterstr) {
            if(parameterstr == undefined) {
                throw new Errors.CommandGenerationError("Parameter undefined !");
            } else if (parameterstr.trim().length == 0) {
                throw new Errors.CommandEmptyError("No parameter passed")
            } else {
                this.parameterName = parameterstr;
            }
        }
        
        /**
         * Returns the parameter name
         **/
        getParameterName() {
            return this.parameterName;
        }
        
        /**
         * Tests if the parameter is a mention
         **/
        isMention() {
            if (this.parameterName.startsWith("<@")
                && this.parameterName.endsWith(">")) {
                    return true;
                } else {
                    return false;
                }
        }
    }
}