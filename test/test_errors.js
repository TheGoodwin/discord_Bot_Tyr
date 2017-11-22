const assert = require("assert");
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
 * Here is a skeleton for testing the various errors construction
 * Just copy/paste and replace with your values
 * 
    function testMY_ERROR() {
        console.log("Processing to test MY_ERROR construction");
        try {
            throw new Errors.MY_ERROR();
        } catch (e) {
            if (e instanceof Errors.MY_ERROR) {
                var expected = 'MY_ERROR_MESSAGE';
                assert.deepEqual(e.message, expected);
                return;
            }
        }
        //If the exception was not get
        assert(false);
    }
 *    
**/

/**
 * Tests the CommandGenerationError construction with a default message 
 **/
function testCommandGenerationError1() {
    console.log("Processing to test CommandGenerationError construction 1");
    try {
        throw new Errors.CommandGenerationError();
    } catch (e) {
        if (e instanceof Errors.CommandGenerationError) {
            var expected = 'error while generating a command';
            assert.deepEqual(e.message, expected);
            return;
        }
    }
    //If the exception was not get
    assert(false);
}

/**
 * Tests the CommandGenerationError construction with a custom message 
 **/
function testCommandGenerationError2() {
    console.log("Processing to test CommandGenerationError construction 2");
    try {
        throw new Errors.CommandGenerationError("Command Generation Error");
    } catch (e) {
        if (e instanceof Errors.CommandGenerationError) {
            var expected = 'Command Generation Error';
            assert.deepEqual(e.message, expected);
            return;
        }
    }
    //If the exception was not get
    assert(false);
}

/**
 * Tests the CommandEmptyError construction with a default message 
 **/
function testCommandEmptyError1() {
    console.log("Processing to test CommandEmptyError construction");
    try {
        throw new Errors.CommandEmptyError();
    } catch (e) {
        if (e instanceof Errors.CommandEmptyError) {
            var expected = 'The command is empty, can not do anything with it.';
            assert.deepEqual(e.message, expected);
            return;
        }
    }
}

/**
 * Tests the CommandEmptyError construction with a custom message 
 **/
function testCommandEmptyError2() {
    console.log("Processing to test CommandEmptyError construction");
    try {
        throw new Errors.CommandEmptyError("There is no command to get");
    } catch (e) {
        if (e instanceof Errors.CommandEmptyError) {
            var expected = 'There is no command to get';
            assert.deepEqual(e.message, expected);
            return;
        }
    }
}

/**
 * Tests the ModuleNotFoundError construction with a default message 
 **/
function testModuleNotFoundError1() {
    console.log("Processing to test ModuleNotFoundError construction 1");
    try {
        throw new Errors.ModuleNotFoundError();
    } catch (e) {
        if (e instanceof Errors.ModuleNotFoundError) {
            var expected = 'The module could not be found';
            assert.deepEqual(e.message, expected);
            return;
        }
    }
    //If the exception was not get
    assert(false);
}

/**
 * Tests the ModuleNotFoundError construction with a custom message 
 **/
function testModuleNotFoundError2() {
    console.log("Processing to test ModuleNotFoundError construction 2");
    try {
        throw new Errors.ModuleNotFoundError("Module Not Found Error");
    } catch (e) {
        if (e instanceof Errors.ModuleNotFoundError) {
            var expected = 'Module Not Found Error';
            assert.deepEqual(e.message, expected);
            return;
        }
    }
    //If the exception was not get
    assert(false);
}

/**
 * Below this comment call your tests method
 **/
 
 console.log("Errors tests running");
 
 testCommandGenerationError1();
 testCommandGenerationError2();
 
 testCommandEmptyError1();
 testCommandEmptyError2();
 
 testModuleNotFoundError1();
 testModuleNotFoundError2();
 
 console.log("Errors test completed");