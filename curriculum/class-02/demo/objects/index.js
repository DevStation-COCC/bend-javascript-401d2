'use strict';

const dogFactory = require('./factory');

let doggo = dogFactory('ellie');
console.log(doggo);
doggo.walk();
doggo.speak();
