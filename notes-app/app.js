const fs = require('fs');
const addFunction = require('./utils');
const getNotes = require('./notes');
// fs.writeFileSync('notes.txt', 'Test file 1');

// fs.appendFileSync('notes.txt', 'append the text');
console.log(addFunction(2, 3));

console.log(getNotes());
