const ModuleNotFoundError = require("./../libs/errors.js").ModuleNotFoundError;

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
		}

		/**
		 * Load the module given its name
		 * @param moduleName module name
		 * @param bot the bot client
		 **/
		loadModule(moduleName,bot) {
			require("./../bot_modules/" + this.getModuleSourceCodePath(moduleName))(bot);
			console.log("Successfully loaded " + moduleName);
			this.loadedModules.push(moduleName);
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
		**/
		getModuleCommandsPath(moduleName) {
			var path = this.getModuleSourceCodePath(moduleName);
			return path.replace(/\/([^\/])*.js/, "/commands.json");
		}

		/**
		 * Refresh the modules in memory
		**/
		getModules(){
			return require("./../bot_modules/modules.json");
		}

		/**
		 * Returns the list of modules in an array of module names;
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
		**/
		isCommandInModule(moduleName, commandName) {
			var moduleCommandsFilePath = "./../bot_modules/" + this.getModuleCommandsPath(moduleName);
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
