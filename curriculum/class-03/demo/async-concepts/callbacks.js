'use strict';

let myCallback = (data) => {
  console.log('2. Received:', data);
};

let useTheCallback = (cb) => {
  let text = 'Some text in useTheCallback()';
  console.log('1: calling the cb');
  cb(text);
  console.log('3. Callback finished in useTheCallback()');
};

// useTheCallback(myCallback);

let errorFirstCallback = (err, data) => {
  if(err) throw err; // just handle the error...
  console.log('2. Received:', data);
};

let useTheErrorFirstCallback = (cb) => {
  let text = 'Some text in useTheErrorFirstCallback()';
  console.log('1. Calling the error first callback');
  cb(undefined, text);
  console.log('3. Callback finished in useTheErrorFirstCallback()');
};

// useTheErrorFirstCallback(errorFirstCallback);

let useTheErrorFirstCallbackWithError = (cb) => {
  let text = 'Some text in useTheErrorFirstCallback()';
  console.log('1. Calling the error first callback');
  try{
    cb('ERROR ENCOUNTERED');
  }catch(e){
    console.error(e);
  }finally{
    console.log('3. Callback finished in useTheErrorFirstCallback()');
  }
};

// useTheErrorFirstCallbackWithError(errorFirstCallback);

let asyncCallback = (err, data) => {
  if(err) throw err;
  console.log('2. Received:', data);
};

let useTheAsyncCallback = (cb) => {
  let text = 'Data from useTheAsyncCallback()';
  console.log('1. Calling the async callback');
  setTimeout(() => {
    cb(undefined, text);
  }, 1000);
  console.log('3. finished useTheAsyncCallback()');
};

useTheAsyncCallback(asyncCallback);
