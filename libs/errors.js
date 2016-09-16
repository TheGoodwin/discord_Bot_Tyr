module.exports = {
    /**
     * Error to be thrown when the command generation has failed
     **/
    CommandGenerationError : class extends Error {
        constructor(message) {
            let defaultMessage = "error while generating a command";
            super(message || defaultMessage);
            this.name = this.constructor.name;
            this.message = message || defaultMessage;
        }
    },
    
    /**
     * Error to be thrown when the command is empty
     **/
    CommandEmptyError : class extends Error {
        constructor(message) {
            let defaultMessage = "The command is empty, can not do anything with it.";
            super(message || defaultMessage);
            this.name = this.constructor.name;
            this.message = message || defaultMessage;
        }
    }
    
    /**
     * Here is a skeleton for creating a new Error
     * Just copy/paste and replace with your values
     * 
    MY_ERROR : class extends Error {
        constructor(message) {
            let defaultMessage = "MY_DEFAULT_MESSAGE";
            super(message || defaultMessage);
            this.name = this.constructor.name;
            this.message = message || defaultMessage;
        }
    }
     * 
     **/ 
}