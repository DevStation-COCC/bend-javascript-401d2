'use strict';

const express = require('express');
const app = express();
const expressSwagger = require('express-swagger-generator')(app);

let options = {
  swaggerDefinition: {
    info: {
      description: 'API Server',
      title: 'Swagger doc page',
      version: '0.0.1',
    },
    basePath: '/api/v1',
    produces: [
      'application/json',
    ],
    host: 'localhost:3000',
    schemes: ['http'],
    securityDefinitions: {
      basicAuth: {
        type: 'basic',
      },
    },
  },
  basedir: __dirname,
  files: [`../../routes/*.js`],
};

expressSwagger(options);

app.listen(3300, () => console.log('swagger listening'));
