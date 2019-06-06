'use strict';

const express = require('express');
const swaggify = require('./middleware/swaggify');
const messenger = require('./middleware/messenger');
const logger = require('./middleware/logger');

const icecreamRouter = require('./routes/icecream');

require('../docs/config/swagger.js');

const app = express();

const schema = ['id', 'name', 'flavor', 'description'];
let db = [];

app.use(express.json());
app.use(logger);
app.use(messenger);

app.use(icecreamRouter);

// SWAGGER
swaggify(app);

app.use('*', (req,res) => {
  res.status(404);
  res.statusMessage = 'Resource Not Found';
  res.json({error:'Not Found'});
});

app.use((error, req, res, next) => {
  res.status(500);
  res.statusMessage = 'Server Error';
  res.json({error:error});
});

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};

