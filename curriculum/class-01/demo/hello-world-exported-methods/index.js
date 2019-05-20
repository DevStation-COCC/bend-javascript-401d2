'use strict';

const hello = require('./lib/hello');
console.log(hello);

console.log(hello.myModuleName);

hello.sayHello('Adam');

console.log(hello.sayGoodbye());
