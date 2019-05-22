'use strict';

const fs = require('fs');

let fileReader = (file, callback) => {
  fs.readFile(file, (err, data) => {
    if(err) callback(err);
    else { callback(null, data.toString().trim()); }
    // console.log(data);

    // callback(null, data.toString().trim());
  });
};


module.exports = exports = fileReader;
