'use strict';

let person = {name: 'Adam'};

function sayHello(city, state){
  return `${this.name} is from ${city}, ${state}`;
}

console.log(sayHello.apply(person, ['Stockton', 'CA'));
