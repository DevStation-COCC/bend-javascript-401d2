'use strict';

let adam = {name: 'Adam', age: 32};
let denae = {name: 'Denae', age: 29};

function sayHello(day){
  return `${this.name} is ${this.age} old on ${day}`;
}

console.log(sayHello.call(adam, 'Tuesday', []));
console.log(sayHello.call(denae, 'Tuesday'));
// console.log(sayHello());

let nums = [1,2,3,4];
console.log(nums.map((element) => element*2));
console.log(Array.prototype.map.call(nums, n => n*2));
