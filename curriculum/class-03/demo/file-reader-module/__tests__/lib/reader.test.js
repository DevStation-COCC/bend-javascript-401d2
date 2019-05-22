'use strict';

// When mocking out embedded modules like fs or buffer, you have to tell jest to mock it
// For 3rd party modules, you can "auto" mock them by simply putting them in the correct __mocks__ folder
jest.mock('fs');

const reader = require('../../lib/reader.js');
