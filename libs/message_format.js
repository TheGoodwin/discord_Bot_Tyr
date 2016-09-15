module.exports = {
	/**
	 * Returns a formatted string corresponfing to the display of a command definition
	 **/
	formatCommand : function(command){
	    //Begins the string formatting
		var str = "`- ";
		
		//Get and add to the string the command name and its the description
		str += command.name + " : " + command.description + "\n";
		
		//If there is no parameters, display it
		if (command.parameters == "none") {
		    str +=  "\tNo parameters\n"
		} else { //Or display all the parameters
		    str += "\tParameters : \n"
		    for (var i in Object.keys(command.parameters))
		    {
		        var parameter = Object.keys(command.parameters)[i];
		        str += "\t\t" + parameter + " : " + command.parameters[parameter] + "\n";
		    }
		}
		
		//Ends the string formatting
		str += "`";
		
		//Returns the string
		return str;
	}
}