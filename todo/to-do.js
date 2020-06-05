const fs = require('fs');

const DBName = 'database';
const listTodo = [];

const create = description => {
  const toDo = {
    description,
    complete: false
  }
  listTodo.push(toDo);
  saveDB(listTodo);
  return `Task saved: ${description}`;
}

const writeFile = data => {
  fs.writeFile(`./db/${DBName}.json`, data, error => {
    if (error) throw error;
  });
  return true;
}

const saveFs = data => {
  //if (typeof data != 'object') throw new Error('Data bad format.');
  if (Object.entries(data).length === 0) throw new Error('Data is empty!');
  return writeFile(data);
}

const saveDB = listTodo => {
  const data = JSON.stringify(listTodo);
  saveFs(data);
}

module.exports = {
  create
};

