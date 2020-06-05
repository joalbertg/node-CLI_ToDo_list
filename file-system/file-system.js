const fs = require('fs');

const DBName = 'database';

const loadDB = data => {
  if (data.length === 0) {
    try {
      data = require('../db/database.json');
    } catch(error) {
      console.log(error.message);
      data = [];
    };
  }
  return data;
}

const writeDB = data => {
  fs.writeFile(`./db/${DBName}.json`, data, error => {
    if (error) throw error;
  });
  return true;
}

module.exports = {
  loadDB,
  writeDB
};

