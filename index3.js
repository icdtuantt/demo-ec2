import fs from 'fs';

fs.readFile('./data.txt', 'utf8', (error, data) => {
  console.log(typeof data);
  console.log(data.split('\n')[0]);
});
