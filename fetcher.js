const getArg = process.argv.slice(2);
const webUrl = getArg[0];
const filePath = getArg[1];
const http = require('http');
const fs = require('fs');

const file = fs.createWriteStream(filePath);
const request = http.get(webUrl, function(response) {
  response.pipe(file);
});