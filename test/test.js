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

function testFormatCommand1() {
    console.dir("Processing to test the FormatCommand method 1");
    var command = {
        "name" : "load <modulenames>",
        "description" : "Load the specified modules",
        "parameters" : {
            "<modulenames>" : "One or more module name (separated by a space) for the bot to load"
        }
    };
    let expected = "`- load <modulenames> : Load the specified modules\n"
    + "\tParameters : \n"
    + "\t\t<modulenames> : One or more module name (separated by a space) for the bot to load\n`";
    let result = MessageFormat.formatCommand(command);
    assert.deepEqual(result,expected);
}

console.log("Tests running");


testFormatCommand1();
//Add tests here

//Add tests to check JSON files

console.log("Tests completed");

process.exit(0);