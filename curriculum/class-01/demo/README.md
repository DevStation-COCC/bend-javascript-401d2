# 01 Node Ecosystem

## envs

Walk through how to check if Perl, php, and python are installed:
- `php -v`
- `perl -v`
- `python --version`
- `python3 --version`
- `node -v`

## single function

FIRST dev into a named function, export named function
SECOND dev into anon function that is being exported

#### ./lib/hello.js
```javascript
'use strict';

// module.exports represents our 'interface' to the outside world.
// Anything that we attach to the exports object is therefore "exposed" or "exported" publicly
// In this case, we're exposing just a raw function, so that when we are "required" in, the user can just run this as a method.
module.exports = exports = (name) => {
  console.log( `Hello ${name}` );
};
```

Show how to `require` the code in a different file

#### ./index.js

```javascript
'use strict';

// Pull in our 'hello' module
const hello = require('./lib/hello.js');

// What is 'hello?'  As you'll see from this console.log, it's a function that you can call.
console.log(hello);

// Call that function directly, and it should log out 'Hello, John'
hello('john');

// Here, we imported a node module that itself is just a function, and then ran it.
```

## exported methods

Let's export an OBJECT and just add properties/methods to it

#### ./lib/hello
```javascript
// Rather than return a function, this time, we are exposing an object through module.exports
module.exports = exports = {};

exports.myModuleName = '401js Hello World Module';
```

Now check what the export looks like in `index.js`
#### ./index.js
```javascript
// Pull in our 'hello' module
const hello = require('./lib/hello.js');

// What is 'hello?'
console.log(hello);
```

#### ./lib/hello.js
Let's add an internal helper function not exported
```javascript
// Internal Helper Function -- because this is not hung on the module.exports object, this is not
// exported as a part of our interface
const getMessage = (name) => {
  return `Hello, ${name}`;
};
```

Additionally let us add some exported functions to use
```javascript
// Here, we're exporting a method called "sayHello".
// Notice that it calls an internal helper function to do it's job
// That function is not part of our interface, as it is not exported
exports.sayHello = (name) => {
  return getMessage(name);
};

// Export another function
exports.sayGoodbye = () => {
  return 'Goodbye';
};
```

#### ./index.js

Let's finish up what we were doing in index.js and test this sucker out!
```javascript
// sayHello() returns a value to us, so we'll capture that
let greeting = hello.sayHello('john');

// ... and print it out
console.log(greeting);

// We can call sayGoodbye() because it was exported from the module.
console.log( hello.sayGoodbye() );

// getMessage() was not imported, so technically it doesn't exist to the outside world.
// We should get a "function does not exist" error here
console.log( hello.getMessage('Adam') );
```

## tested

NOTE: Leave `index.js` as is, just review

#### ./lib/hello.js

Export basic function, but show off jsdoc!
```javascript
// Prep our interface mechanism (module.exports)
module.exports = exports = {};

/**
 * sayGoodbye()
 * @returns {string}
 */
exports.sayGoodbye = () => {
  return 'Goodbye';
};
```

#### ./__test__/lib/hello.test.js

REVIEW `.travis.yml`
Review structure of `__test__` and naming convention of dir/files
Build out entire `hello.test.js` with `npm run test-watch` running

#### ./lib/hello.js
Now build out `sayHello()`
```javascript
/**
 * Interface Method: sayHello(name)
 * @param {string} name - The name of the person the will be greeted
 * @returns {string}
 */
exports.sayHello = (...args) => {
  if(args.length !== 1) { return null; }
  if( typeof args[0] !== 'string' ) { return null; }
  return `Hello, ${args[0]}`;
};
```