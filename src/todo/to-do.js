const { saveDB, loadDB } = require('../services');
const { arrayIndexing } = require('../helpers');

let listTodo = [];

const list = show_all => {
  listTodo = loadDB(listTodo);
  console.log(show_all)
  return show_all ? listTodo : listTodo.filter(element => !element['done']);
}

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

const remove = id => {
  listTodo = loadDB(listTodo);
  const task = arrayIndexing(listTodo, 'id')[id];

  if (task) {
    task.done = true;
    listTodo[id] = task;
    saveDB(listTodo);
  }
  return true;
}

module.exports = {
  create,
  list,
  update,
  remove
};

