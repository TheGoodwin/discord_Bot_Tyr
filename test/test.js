const assert = require("assert");
const MessageFormat = require("../libs/message_format.js");

/**
 * Here is a skeleton for the various test methods
 * Just copy/paste and replace with your values
 * 
    function testskeleton() {
        console.log("Processing to test the TESTSKELETON method");
        
        let expected = "MY_EXPECTED_VALUES";
        let result = MY_FUNCTION_TO_TEST();
        assert.deepEqual(result,expected);
    }
 *    
**/

/**
 * Test the formatCommand method with one parameter
 **/ 
function testFormatCommand1() {
    console.log("Processing to test the FormatCommand method 1");
    var command = {
        "name" : "load <modulenames>",
        "description" : "Load the specified modules",
        "parameters" : {
            "<modulenames>" : "One or more module name (separated by a space) for the bot to load"
        }
    };
    let expected = "`- load <modulenames> : Load the specified modules\n"
    + "\tParameters : \n"
    + "\t\t<modulenames> : One or more module name (separated by a space) for the bot to load`\n";
    let result = MessageFormat.formatCommand(command);
    assert.deepEqual(result,expected);
}

/**
 * Test the formatCommand method without parameter
 **/ 
function testFormatCommand2() {
    console.log("Processing to test the FormatCommand method 2");
    var command = {
        "name" : "status",
        "description" : "Send a message presenting the bot status and the module loaded",
        "parameters" : "none"
    };
    let expected = "`- status : Send a message presenting the bot status and the module loaded\n"
    + "\tNo parameters`\n";
    let result = MessageFormat.formatCommand(command);
    assert.deepEqual(result,expected);
}

/**
 * Test the formatCommand method with at least two parameters
 **/ 
function testFormatCommand3() {
    console.log("Processing to test the FormatCommand method 3");
    var command = {
        "name" : "ccm [-r | -reset] <marker>",
        "description" : "Change the command marker with the specified one so that there is no conflict with other bots",
        "parameters" : {
            "<marker>" : "The new marker to use in order to launch commands",
            "-r, --reset" : "Reset the marker to the default one (being `&`)"
        }
    };
    let expected = "`- ccm [-r | -reset] <marker> : Change the command marker with the specified one so that there is no conflict with other bots\n"
    + "\tParameters : \n"
    + "\t\t<marker> : The new marker to use in order to launch commands\n"
    + "\t\t-r, --reset : Reset the marker to the default one (being `&`)`\n";
    let result = MessageFormat.formatCommand(command);
    assert.deepEqual(result,expected);
}

console.log("Main tests running");
/**
 * Add tests here
 **/

testFormatCommand1();
testFormatCommand2();
testFormatCommand3();

//TODO Add tests to check JSON files

console.log("Main tests completed");

process.exit(0);