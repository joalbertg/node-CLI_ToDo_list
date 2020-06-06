const colors = require('colors');

const list = array => {
  console.log('=============TODO============='.green);
  for (let task of array)
    taskStyle(task);
}

const completeColor = task => {
  text = String(task.complete);
  return task.complete ? text.green : text.red;
}

const taskStyle = task => {
  if (task['done']) {
    console.log(`ID: ${task.id} ${task.description}`);
  } else {
    console.log(
      `ID: ${String(task.id).cyan} ${String(task.description).magenta} ${completeColor(task)}`
    );
  };
}

module.exports = {
  list
};

