'use strict';

const fs = require('fs');
const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

const readFile = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if(err) reject(err);
      else resolve(data);
    });
  });
};

const writeFile = (file, buffer) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, buffer, (err) => {
      if(err) reject(err);
      else resolve(undefined);
    });
  });
};

const file = module.exports = exports = {};

file.loadFile = (file) => readFile(file);

file.saveFile = (file,buffer) => writeFile(file,buffer);

file.convertBuffer = buffer => Buffer.from(buffer.toString().trim().toUpperCase());

file.alterFile = incomingFile =>
  file.loadFile(incomingFile)
    .then( contents => file.convertBuffer(contents) )
    .then( buffer => file.saveFile(incomingFile,buffer) )
    .then( () => socket.emit('publish', {event: 'save', data: incomingFile}) )
    .then(() => true)
    .catch( error => socket.emit('publish', {event: 'err', data: error}));
