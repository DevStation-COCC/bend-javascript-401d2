'use strict';

const Animal = () => ({
  walk: () => {
    console.log('walking...');
  }
});

function DogFactory(name) {

  let dog = Object.assign(
    {age: 7},
    {name},
    {speak},
    Animal()
  );

  function speak() {console.log('WOOF');}

  return Object.freeze(dog);
}

module.exports = DogFactory;
