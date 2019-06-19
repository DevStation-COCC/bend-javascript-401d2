'use strict';

const io = require('socket.io')(3000);
io.on('connection', socket => {
  console.log(`CORE socket connection received ${socket.id}`);
  socket.on('speak', payload => {
    io.emit('message', payload);
  });
});

const devstation = io.of('/devstation');
devstation.on('connection', socket => {
  console.log(`DEVSTATION socket connection received ${socket.id}`);
  socket.on('speak', payload => {
    devstation.emit('message', payload);
  });
});

const home = io.of('/home');
home.on('connection', socket => {
  console.log(`HOME ${socket.id}`);
  socket.on('speak', payload => {
    home.emit('message', payload);
  });
});
