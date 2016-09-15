const Modules = require("./../bot_modules/modules.json");

module.exports = {
	/**
	 * Returns the list of modules in an array of module names;
	 **/
	listModules : function(){
		var modules = [];
		//Get all the names in the modules.json file and stack them in the `modules` variables
		for (var i = 0; i < Object.keys(Modules).length; i++) {
		    modules.push(Modules[i].name);
		}
		return modules;
	}
}
