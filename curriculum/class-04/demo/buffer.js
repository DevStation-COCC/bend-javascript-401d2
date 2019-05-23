'use strict';

const os = require('os');
console.log(os.endianness());

for(let i = 0; i <= 9; i++){
  console.log(i.toString(2).padStart(4, 0));
}

let buffer = Buffer.from('Wow, this topic is really cool!');
console.log(buffer);

console.log(buffer.toString());

let stringfyBuffer = buffer => {
  let str = '';
  for(let char of buffer){
    str += String.fromCharCode(char);
  }

  return str;
};

console.log(stringfyBuffer(buffer));

buffer[0] = 0x77;
console.log(stringfyBuffer(buffer));

console.log(buffer.readInt16LE(0));
console.log(buffer.readUInt16LE(0));
console.log(buffer.readInt32LE(0));
console.log(buffer.length);
