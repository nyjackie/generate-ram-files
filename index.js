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

let data = ""

for (let n = 0; n < randomWords.length; n++) {
  const randomN = Math.ceil(Math.random() * randomWords.length)
  data = data + randomWords[randomN] + " "
}

fs.writeFile(`${__dirname}/file.js`, data, { flag: 'wx' }, function(err) {
  if (err) throw err;
  console.log("It's saved!");
});

