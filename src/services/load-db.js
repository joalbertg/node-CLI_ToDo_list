const loadDB = data => {
  if (data.length === 0) {
    try {
      data = require('../../db/database.json');
    } catch(error) {
      console.log(error.message);
      data = [];
    };
  }
  return data;
}

module.exports = {
  loadDB
};

