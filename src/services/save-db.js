const { saveFs } = require('./save-fs');

const saveDB = listTodo => {
  const data = JSON.stringify(listTodo);
  return saveFs(data);
}

module.exports = {
  saveDB
};

