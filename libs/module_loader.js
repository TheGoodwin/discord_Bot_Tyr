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

	/**
	 * Get the module description and returns it
	 **/
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
			throw new ModuleNotFoundError("The module " + moduleName + " could not be found");
		}
		return description;
	},

	/**
	 * Get the module path and returns it
	 **/
	getModulePath : function(moduleName) {
		var path = "";
		var i = 0; //Count the module
		while (path == "" && i < Object.keys(Modules).length)
		{
			if (moduleName.toLowerCase() == Modules[i].name.toLowerCase()) {
				path = Modules[i].path;
			}
			i++;
		}
		if (path == "") {
			throw new ModuleNotFoundError("The module " + moduleName + " could not be found");
		}
		return path;
	},

	/**
	 * Load the module given its name
	 * @param moduleName module name
	 * @param bot the bot client
	 **/
	loadModule : function(moduleName,bot) {
		require("./../bot_modules/" + this.getModulePath(moduleName))(bot);
		console.log("Successfully loaded " + moduleName);
	},

	/**
	 * Load all the modules given their names in the array
	 * @param moduleNameArray Array containing all the module name
	 * @param bot the bot client
	 **/
	loadModules : function(moduleNameArray,bot) {
		for (var i = 0; i < moduleNameArray.length; i++) {
			this.loadModule(moduleNameArray[i], bot);
		}
	}
}
