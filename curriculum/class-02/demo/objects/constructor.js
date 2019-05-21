'use strict';

const Animal = function(name) {
  this.name = name;
};

Animal.prototype.walk = () => {
  console.log('walking...');
};

Animal.prototype.speak = () => {
  console.log('blark bleep');
};

const Dog = function(name) {
  Animal.call(this, name);
};

Dog.prototype = new Animal();

Dog.prototype.speak = () => {
  console.log('WOOF');
};

const doggo = new Dog('ellie');
doggo.walk();
doggo.speak();

const Cat = function(name) {
  Animal.call(this, name);
};

Cat.prototype = new Animal();

Cat.prototype.speak = () => {
  console.log('MEOW');
};

let kitty = new Cat('porter');
kitty.speak();
kitty.walk();

