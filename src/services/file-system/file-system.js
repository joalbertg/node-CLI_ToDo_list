const fs = require('fs');

const DBName = 'database';

const writeDB = data => {
  fs.writeFile(`./db/${DBName}.json`, data, error => {
    if (error) throw error;
  });
  return true;
}

module.exports = {
  writeDB
};

