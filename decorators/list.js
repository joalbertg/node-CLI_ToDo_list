const colors = require('colors');

const list = array => {
  console.log('=============TODO============='.green);
  for (let task of array) {
    console.log(
      `ID: ${String(task.id).cyan} ${String(task.description).magenta} ${completeColor(task)}`
    );
  }
}

const completeColor = task => {
  text = String(task.complete);
  return task.complete ? text.green : text.red;
}

module.exports = {
  list
};

