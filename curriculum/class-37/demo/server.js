const PORT = process.env.PORT || 3000;

const io = require('socket.io')(PORT);

io.on('connection', socket => {

  console.log('Connected', socket.id);

  socket.on('chat', (payload) => {
    console.log('broadcast', payload);
    io.emit('incoming', payload);
  });

});


/// ALSO, do a q server on 3333...
const Q = require('@nmq/q/server');
Q.start();

const chat = new Q('chat');
chat.monitorEvent('message');
