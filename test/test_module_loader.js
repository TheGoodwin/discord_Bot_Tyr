const ModuleLoader = require("./../libs/module_loader.js");
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
**/

/**
 * Tests the getModuleDescription method with a valid module name
 **/
function testGetModuleDescriptionMethod1() {
    console.log("Processing to test the getModuleDescription method 1");

    let expected = "Module allowing the use of commands to the users";
    let result = ModuleLoader.getModuleDescription("basics");
    assert.deepEqual(result,expected);
}

/**
 * Tests the getModuleDescription method with an empty module name
 **/
function testGetModuleDescriptionMethod2() {
    console.log("Processing to test the getModuleDescription method 2");
    try {
        ModuleLoader.getModuleDescription("");
    } catch (e) {
        if (e instanceof Errors.ModuleNotFoundError)
        {
            assert(true);
            return;
        }
    }
    assert(false);
}

/**
 * Tests the getModuleDescription method with an wrong module name
 **/
function testGetModuleDescriptionMethod3() {
    console.log("Processing to test the getModuleDescription method 3");
    try {
        ModuleLoader.getModuleDescription("wrongmodulename");
    } catch (e) {
        if (e instanceof Errors.ModuleNotFoundError)
        {
            assert(true);
            return;
        }
    }
    assert(false);
}

/**
 * Tests the getModulePath method with a valid module name
 **/
function testGetModulePathMethod1() {
    console.log("Processing to test the getModulePath method 1");

    let expected = "basics/basics.js";
    let result = ModuleLoader.getModulePath("basics");
    assert.deepEqual(result,expected);
}

/**
 * Tests the getModulePath method with an empty module name
 **/
function testGetModulePathMethod2() {
    console.log("Processing to test the getModulePath method 2");
    try {
        ModuleLoader.getModulePath("");
    } catch (e) {
        if (e instanceof Errors.ModuleNotFoundError)
        {
            assert(true);
            return;
        }
    }
    assert(false);
}

/**
 * Tests the getModuleDescription method with an wrong module name
 **/
function testGetModulePathMethod3() {
    console.log("Processing to test the getModulePath method 3");
    try {
        ModuleLoader.getModulePath("wrongmodulename");
    } catch (e) {
        if (e instanceof Errors.ModuleNotFoundError)
        {
            assert(true);
            return;
        }
    }
    assert(false);
}

console.log("Module_Loader tests running");
/**
 * Add tests here
 **/

/** GetModuleDescription tests **/
testGetModuleDescriptionMethod1();
testGetModuleDescriptionMethod2();
testGetModuleDescriptionMethod3();

/** GetModulePath tests **/
testGetModulePathMethod1();
testGetModulePathMethod2();
testGetModulePathMethod3();

console.log("Module_Loader tests completed");

process.exit(0);
