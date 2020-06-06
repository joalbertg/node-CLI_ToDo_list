const { isEmptyObject } = require('../validations');
const { writeDB } = require('./file-system');

const saveFs = data => {
  isEmptyObject(data);
  return writeDB(data);
}

module.exports = {
  saveFs
};

