const fs = require('fs');

// fs.writeFileSync('notes.txt', 'Test file 1');

fs.appendFileSync('notes.txt', 'append the text');
