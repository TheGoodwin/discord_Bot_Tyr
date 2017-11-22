const ModuleNotFoundError = require("./../libs/errors.js").ModuleNotFoundError;
const fs = require('fs');

module.exports = {

	/**
	 * ModuleLoader class
	 * Use this class to load modules
	**/
	ModuleLoader : class {
		/**
		 * Default constructor
		 **/
		constructor() {

			this.loadedModules = [];
			this.path_modules = "./../bot_modules/";


		}

		/**
		 * Load the module given its name
		 * @param moduleName module name
		 * @param bot the bot client
		 **/
		loadModule(moduleName,bot) {
			if (!this.loadedModules.indexOf(moduleName) > -1) { //If the module is not already loaded
				require(this.path_modules + this.getModuleSourceCodePath(moduleName))(bot, arguments[2]);
				console.log("Successfully loaded " + moduleName);
				this.loadedModules.push(moduleName);
			}
		}

		/**
		 * Load all the modules given their names in the array
		 * @param moduleNameArray Array containing all the module name
		 * @param bot the bot client
		 **/
		loadModules(moduleNameArray, bot) {
			for (var i = 0; i < moduleNameArray.length; i++) {
				this.loadModule(moduleNameArray[i], bot);
			}
		}

		/**
		 * Get the module source code path and returns it
		 * @param moduleName the name of the module
		 * @return the module source code path
		 **/
		getModuleSourceCodePath(moduleName) {
			var path = "";
			var i = 0; //Count the module
			var modulesList = this.getModules();
			while (path == "" && i < Object.keys(modulesList).length)
			{
				if (moduleName.toLowerCase() == modulesList[i].name.toLowerCase()) {
					path = modulesList[i].path;
				}
				i++;
			}
			if (path == "") {
				throw new ModuleNotFoundError("The module " + moduleName + " could not be found");
			}
			return path;
		}

		/**
		 * Get the module commands.json file path
		 * @param moduleName the name of the module
		 * @return the module commands source path
		**/
		getModuleCommandsPath(moduleName) {
			var path = this.getModuleSourceCodePath(moduleName);
			return path.replace(/\/([^\/])*.js/, "/commands.json");
		}

		/**
		 * Gets the module commands.json file
		 * @param the module name
		 * @return the module commands.json file
		 **/
		getModuleCommands(moduleName) {
			return require(this.path_modules + this.getModuleCommandsPath(moduleName));
		}

		/**
		 * Refresh the modules in memory
		 * @return Returns the module list file
		**/
		getModules(){
			return require(this.path_modules + "modules.json");
		}

		/**
		 * Returns the list of modules in an array of module names;
		 * @return the list of modules
		 **/
		listModules(){
			var modules = [];
			var modulesList = this.getModules();
			//Get all the names in the modules.json file and stack them in the `modules` variables
			for (var i = 0; i < Object.keys(modulesList).length; i++) {
					modules.push(modulesList[i].name);
			}
			console.log(modules);
			return modules;
		}

		/**
		 * Get the module description and returns it
		 * @return the module description
		 **/
		getModuleDescription(moduleName) {
			var description = "";
			var i = 0; //Count the module
			var modulesList = this.getModules();
			while (description == "" && i < Object.keys(modulesList).length)
			{
				if (moduleName.toLowerCase() == modulesList[i].name.toLowerCase()) {
					description = modulesList[i].description;
				}
				i++;
			}
			if (description == "") {
				throw new ModuleNotFoundError("The module " + moduleName + " could not be found");
			}
			return description;
		}

		/**
		 * Check if the command can be found in the module
		 * @param moduleNameArray the module name
		 * @param commandName the name of the command
		 * @return true if the command is in the module; false otherwise
		**/
		isCommandInModule(moduleName, commandName) {
			var moduleCommandsFilePath = this.path_modules + this.getModuleCommandsPath(moduleName);
			var moduleCommands = require(moduleCommandsFilePath);

			var isInModule = false;

			for (var i = 0; i < Object.keys(moduleCommands).length; i++) {
				if (moduleCommands[i].name === commandName) {
					isInModule = true;
					break;
				}
			}

			delete require.cache[require.resolve(moduleCommandsFilePath)];
			return isInModule;
		}

		/**
		 * Check if the command can be found in the modules in the module array
		 * @param moduleNameArray Array containing all the module name
		 * @param commandName the name of the command
		 * @return true if the command is in a module of the array; false otherwise
		**/
		isCommandInModuleArray(moduleNameArray, commandName) {
			var isInModuleArray = false;
			for (var i = 0; i < moduleNameArray.length; i++) {
				if (this.isCommandInModule(moduleNameArray[i], commandName) === true) {
					isInModuleArray = true;
					break;
				}
			}
			return isInModuleArray;
		}
	}
}
