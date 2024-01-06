const { randomWords } = require('./constants')
const fs = require('fs');

// delete a file asynchronously
fs.unlink('file.js', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('File is deleted.');
  }
});


for (let n = 0; n < randomWords.length; n++) {
  const randomN = Math.floor(Math.random() * randomWords.length)
  fs.appendFile(`${__dirname}/file.js`, randomWords[randomN] + '\n', function(err) {
    if (err) throw err;
    console.log("It's saved!");
  });
}


