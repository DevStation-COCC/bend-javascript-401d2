'use strict';

const helloWorldModule = {};

module.exports = exports = helloWorldModule; 

helloWorldModule.myModuleName = 'bend-javascript-401js Hello World Module';

const getMessage = name => `Hello, ${name}.`;

helloWorldModule.sayHello = (name) => console.log(getMessage(name));

helloWorldModule.sayGoodbye = () => 'Goodbye';
