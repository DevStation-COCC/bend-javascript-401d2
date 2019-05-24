'use strict';

const fs = require('fs');

const buffer = fs.readFileSync(`${__dirname}/kitty-bday.bmp`);
// const buffer = fs.readFileSync(`${__dirname}/helperkitty.bmp`);

const parsedBitmap = {};

const FILE_TYPE_OFFSET = 0;
const FILE_SIZE_OFFSET = 2;
const PIXEL_OFFSET = 10;
const WIDTH_OFFSET = 18;
const HEIGHT_OFFSET = 22;
const BYTES_PER_PIXEL_OFFSET = 28;
const COLOR_TABLE_OFFSET = 54;

parsedBitmap.buffer = buffer;
parsedBitmap.type = buffer.toString('utf-8', FILE_TYPE_OFFSET, 2);
parsedBitmap.fileSize = buffer.readInt32LE(FILE_SIZE_OFFSET);
parsedBitmap.pixelOffset = buffer.readInt32LE(PIXEL_OFFSET);
parsedBitmap.width = buffer.readInt32LE(WIDTH_OFFSET);
parsedBitmap.heigt = buffer.readInt32LE(HEIGHT_OFFSET);
parsedBitmap.bytesPerPixel = buffer.readInt32LE(BYTES_PER_PIXEL_OFFSET);
parsedBitmap.colorArray = buffer.slice(COLOR_TABLE_OFFSET, parsedBitmap.pixelOffset);

if(!parsedBitmap.colorArray.length){
  throw 'Invalid .bmp format';
}

console.log(parsedBitmap);


const grayscale = require('./lib/grayscale');

grayscale(parsedBitmap);

fs.writeFile('helperkitty.grayscale.bmp', parsedBitmap.buffer, (err) => {
  if(err) throw err;
  console.log('success!');
});










