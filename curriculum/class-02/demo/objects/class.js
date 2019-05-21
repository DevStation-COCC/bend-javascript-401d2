'use strict';

class Animal {
  constructor(name){
    this.name = name;
  }

  walk() {
    console.log('walking...');
  }
}

class Dog extends Animal {
  constructor(name){
    super(name);
  }

  speak() {
    console.log('WOOF');
  }

  run() {
    super.walk();
  }
}

let doggo = new Dog('Ellie');
console.log(doggo);
doggo.run();
