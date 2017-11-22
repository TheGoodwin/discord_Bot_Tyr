const assert = require("assert");
const Parameter = require("./../libs/parameter.js").Parameter;
const Errors = require("./../libs/errors.js");

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
 * Test if a valid parameter builds without any error
 **/
function testParameterConstructor1() {
    console.log("Processing to test the Parameter constructor method 1");
    new Parameter("-r");
    //No try-catch because there should not be any errors
}

/**
 * Test if a non-valid command builds with an error
 * The expected error should be a CommandGenerationError
 **/
function testParameterConstructor2() {
    console.log("Processing to test the Parameter constructor with expecting an error 2");
    try {
        new Parameter(undefined);
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
function testParameterConstructor3() {
    console.log("Processing to test the Parameter constructor with expecting an error 3");
    try {
        new Parameter("");
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
function testParameterConstructor4() {
    console.log("Processing to test the Parameter constructor with expecting an error 4");
    try {
        new Parameter("   ");
    } catch (e) {
        if (e instanceof Errors.CommandEmptyError) {
            assert(true);
            return;
        }
    }
    assert(false);
}

/**
 * Tests the getParameterName
 **/
function testGetParameterName1() {
    console.log("Processing to test the Parameter getParameter method 1");
    let param = new Parameter("-r");
    let expected = "-r";
    let result = param.getParameterName();
    assert.deepEqual(expected,result);
}

/**
 * Tests the isMention method with a mention
 **/
function testIsMention1() {
    console.log("Processing to test the Parameter isMention method 1");
    let param = new Parameter("<@190878852247767153>");
    let expected = true;
    let result = param.isMention();
    assert.deepEqual(expected,result);
}

/**
 * Tests the isMention method with a mention
 **/
function testIsMention2() {
    console.log("Processing to test the Parameter isMention method 2");
    let param = new Parameter("-r");
    let expected = false;
    let result = param.isMention();
    assert.deepEqual(expected,result);
}

console.log("Main tests running");
/**
 * Add tests here
 **/
 
 /** Constructor tests **/
testParameterConstructor1();
testParameterConstructor2();
testParameterConstructor3();
testParameterConstructor4();

/** GetParameterName **/
testGetParameterName1();

/** IsMention **/
testIsMention1();
testIsMention2();

console.log("Main tests completed");

process.exit(0);
