const { parseHTML } = require("symbols-coding-test");
const fs = require('fs');

const filePath = process.argv[2];

if (!filePath) {
  console.error('Please provide a file path.');
  process.exit(1);
}

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err.message}`);
    process.exit(1);
  }

  const parsedHTML = parseHTML(data);
  console.log(parsedHTML);
});
