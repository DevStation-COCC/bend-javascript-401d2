'use strict';

let longTask = (foo) => {
  return new Promise((resolve, reject) => {
    if(foo) { resolve(foo); }
    else { reject('Bad'); }
  });
};

let handlePromiseResolve = (data) => { 
  console.log(data);
  return longTask('baz');
};

// longTask('bar')
//   .then(handlePromiseResolve)
//   .then(handlePromiseResolve)
//   .catch(console.error)
//   .then(handlePromiseResolve)
//   .then(handlePromiseResolve)
//   .then(handlePromiseResolve)
//   .catch(console.error)
//   .then(handlePromiseResolve)
//   .then(handlePromiseResolve)
//   .catch(console.error);

let stuffToDo = [];
for(let i = 0; i < 10; i++){
  stuffToDo.push(longTask(`Adam: ${i}`));
}

Promise.all(stuffToDo)
  .then(handlePromiseResolve)
  .catch(console.error);
