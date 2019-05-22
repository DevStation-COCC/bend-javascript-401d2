'use strict';

let longRequest = (url) => {
  let data = {
    count: 2,
    results: ['a', 'b']
  };

  let randNumber = Math.floor(Math.random() * 99) + 1;
  return (randNumber < 50) ? data : false;
};

async function fetchRemoteData(url) {
  let result = false;
  while(!result){
    result = await longRequest(url);
    console.log(result);
  }
}

fetchRemoteData('http://foo.com');
