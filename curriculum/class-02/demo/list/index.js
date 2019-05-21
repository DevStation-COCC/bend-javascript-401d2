'use strict';

const List = require('./lib/list.js');

let myList = new List();

myList.push('Adam');
myList.push({name: 'Denae'});
// console.log(myList);

let numList = new List();
numList.push(1);
numList.push(2);
numList.push(3);
numList.push(4);
let newList = numList.map((element, index) => {
  console.log(index);
  return element*2;
});

console.log(newList);
console.log(newList.pop());
console.log(newList);
