const Modules = require("./../bot_modules/modules.json");
const ModuleNotFoundError = require("./../libs/errors.js").ModuleNotFoundError;

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
		console.log(modules);
		return modules;
	},
	
	getModuleDescription: function(moduleName) {
		var description = "";
		var i = 0; //Count the module
		while (description == "" && i < Object.keys(Modules).length)
		{
			if (moduleName.toLowerCase() == Modules[i].name.toLowerCase()) {
				description = Modules[i].description;
			}
			i++;
		}
		if (description == "") {
			throw new ModuleNotFoundError();
		}
		return description;
	}
}
