const assert = require("assert");
const Command = require("./../libs/command.js").Command;
const Errors = require("./../libs/errors.js");;

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
 * Test if a valid command builds without any error (no parameters passed)
 **/
function testCommandConstructor1() {
    console.log("Processing to test the Command constructor method 1");
    new Command("help");
    //No try-catch because there should not be any errors
}

/**
 * Test if a valid command builds without any error (one parameter passed)
 **/
function testCommandConstructor2() {
    console.log("Processing to test the Command constructor method 2");
    new Command("help param");
    //No try-catch because there should not be any errors
}

/**
 * Test if a valid command builds without any error (at least 2 parameters passed)
 **/
function testCommandConstructor3() {
    console.log("Processing to test the Command constructor method 3");
    new Command("help param1 param2");
    //No try-catch because there should not be any errors
}

/**
 * Test if a non-valid command builds with an error
 * The expected error should be a CommandGenerationError
 **/
function testCommandConstructor4() {
    console.log("Processing to test the Command constructor with expecting an error 1");
    try {
        new Command(undefined);
    } catch (e) {
        if (e instanceof Errors.CommandGenerationError) {
            assert(true);
            return;
        }
    }
    assert(false);
}

/**
 * Test if a non-valid command builds with an error
 * The expected error should be a CommandEmptyError
 **/
function testCommandConstructor5() {
    console.log("Processing to test the Command constructor with expecting an error 2");
    try {
        new Command("");
    } catch (e) {
        if (e instanceof Errors.CommandEmptyError) {
            assert(true);
            return;
        }
    }
    assert(false);
}

/**
 * Test if a non-valid command builds with an error
 * The expected error should be a CommandEmptyError
 **/
function testCommandConstructor5() {
    console.log("Processing to test the Command constructor with expecting an error 3");
    try {
        new Command("   ");
    } catch (e) {
        if (e instanceof Errors.CommandEmptyError) {
            assert(true);
            return;
        }
    }
    assert(false);
}

console.log("Main tests running");
/**
 * Add tests here
 **/
testCommandConstructor1();
testCommandConstructor2();
testCommandConstructor3();
testCommandConstructor4();
testCommandConstructor5();


console.log("Main tests completed");

process.exit(0);
