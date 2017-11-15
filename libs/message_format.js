module.exports = {
	/**
	 * Returns a formatted string corresponfing to the display of a command definition
	 * @param the command
	 **/
	formatCommand : function(command){
	    //Begins the string formatting
		var str = "`- ";

		//Get and add to the string the command name and its the description
		str += command.name + " : " + command.description + "\n";

		//If there is no parameters, display it
		if (command.parameters == "none") {
		    str +=  "\tNo parameters"
		} else { //Or display all the parameters
		    str += "\tParameters : "
		    for (var i in Object.keys(command.parameters))
		    {
		        var parameter = Object.keys(command.parameters)[i];
		        str += "\n\t\t" + parameter + " : " + command.parameters[parameter];
		    }
		}

		//Ends the string formatting
		str += "`\n";

		//Returns the string
		return str;
	},

	/**
	 * Returns a formatted string corresponfing to the display of a module name
	 * @param the module name
	 **/
	 formatModuleName : function(moduleName) {
		 var str = "** Module `"+moduleName+"` : **\n"
		 return str;
	 }
}
