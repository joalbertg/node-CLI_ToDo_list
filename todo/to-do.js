const { loadDB } = require('../file-system');
const { saveDB } = require('../services');
const { arrayIndexing } = require('../helpers');

let listTodo = [];

const list = () => loadDB(listTodo);

const create = description => {
  listTodo = loadDB(listTodo);

  const toDo = {
    id: listTodo.length,
    description,
    complete: false
  }

  listTodo.push(toDo);
  saveDB(listTodo);
  return `Task saved: ${description}`;
}

const update = (id, description, complete = true) => {
  listTodo = loadDB(listTodo);
  let task = arrayIndexing(listTodo, 'id')[id];

  if (!task) throw new Error(`Error: ${id} not found.`);
  description = description ? description : task.description;

  task = { ...task, description, complete };
  listTodo[id] = task;
  saveDB(listTodo);
}

module.exports = {
  create,
  list,
  update
};
