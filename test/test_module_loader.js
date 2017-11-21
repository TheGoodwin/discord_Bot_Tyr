const ModuleLoader = require("./../libs/module_loader.js").ModuleLoader;
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
    let result = new ModuleLoader().getModuleDescription("basics");
    assert.deepEqual(result,expected);
}

/**
 * Tests the getModuleDescription method with an empty module name
 **/
function testGetModuleDescriptionMethod2() {
    console.log("Processing to test the getModuleDescription method 2");
    try {
        new ModuleLoader().getModuleDescription("");
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
        new ModuleLoader().getModuleDescription("wrongmodulename");
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
function testGetModuleSourceCodePathMethod1() {
    console.log("Processing to test the getModuleSourceCodePath method 1");

    let expected = "basics/basics.js";
    let result = new ModuleLoader().getModuleSourceCodePath("basics");
    assert.deepEqual(result,expected);
}

/**
 * Tests the getModulePath method with an empty module name
 **/
function testGetModuleSourceCodePathMethod2() {
    console.log("Processing to test the getModuleSourceCodePath method 2");
    try {
        new ModuleLoader().getModuleSourceCodePath("");
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
function testGetModuleSourceCodePathMethod3() {
    console.log("Processing to test the getModuleSourceCodePath method 3");
    try {
        new ModuleLoader().getModuleSourceCodePath("wrongmodulename");
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
 * Tests the getModuleCommandsPath method with a valid module name
 **/
function testGetModuleCommandsPathMethod1() {
    console.log("Processing to test the getModuleCommandsPath method 1");

    let expected = "basics/commands.json";
    let result = new ModuleLoader().getModuleCommandsPath("basics");
    assert.deepEqual(result,expected);
}

/**
 * Tests the getModuleCommandsPath method with an empty module name
 **/
function testGetModuleCommandsPathMethod2() {
    console.log("Processing to test the getModuleCommandsPath method 2");
    try {
        new ModuleLoader().getModuleCommandsPath("");
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
 * Tests the getModuleCommandsPath method with an wrong module name
 **/
function testGetModuleCommandsPathMethod3() {
    console.log("Processing to test the getModuleCommandsPath method 3");
    try {
        new ModuleLoader().getModuleCommandsPath("wrongmodulename");
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
 * Tests the isCommandInModule method with an existing command name
 **/
function testIsCommandInModuleMethod1() {
  console.log("Processing to test the isCommandInModule method 1");

  let expected = true;
  let result = new ModuleLoader().isCommandInModule("basics", "ping");
  assert.deepEqual(result,expected);
}

/**
 * Tests the isCommandInModule method with a non-existing command name
 **/
function testIsCommandInModuleMethod2() {
  console.log("Processing to test the isCommandInModule method 2");

  let expected = false;
  let result = new ModuleLoader().isCommandInModule("basics", "pang");
  assert.deepEqual(result,expected);
}

/**
 * Tests the isCommandInModuleArray method with an existing command name
 **/
function testIsCommandInModuleArrayMethod1() {
  console.log("Processing to test the isCommandInModuleArray method 1");

  let expected = true;
  let result = new ModuleLoader().isCommandInModuleArray(["basics"], "ping");
  assert.deepEqual(result,expected);
}

/**
 * Tests the isCommandInModuleArray method with a non-existing command name
 **/
function testIsCommandInModuleArrayMethod2() {
  console.log("Processing to test the isCommandInModuleArray method 2");

  let expected = false;
  let result = new ModuleLoader().isCommandInModuleArray(["basics"], "pang");
  assert.deepEqual(result,expected);
}

console.log("Module_Loader tests running");
/**
 * Add tests here
 **/

/** GetModuleDescription tests **/
testGetModuleDescriptionMethod1();
testGetModuleDescriptionMethod2();
testGetModuleDescriptionMethod3();

/** GetModuleSourceCodePath tests **/
testGetModuleSourceCodePathMethod1();
testGetModuleSourceCodePathMethod2();
testGetModuleSourceCodePathMethod3();

/** GetModuleCommandsPath tests **/
testGetModuleCommandsPathMethod1();
testGetModuleCommandsPathMethod2();
testGetModuleCommandsPathMethod3();

/** isInModule tests **/
testIsCommandInModuleMethod1();
testIsCommandInModuleMethod2();

/** isInModuleArray tests **/
testIsCommandInModuleArrayMethod2();
testIsCommandInModuleArrayMethod1();

console.log("Module_Loader tests completed");

process.exit(0);
