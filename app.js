const colors = require('colors');

const { argv } = require('./config');
const toDo = require('./todo');

//console.log(argv);

let command = argv._[0];

switch ( command ) {
  case 'create':
    let todo = toDo.create(argv.description);
    console.log(todo);
    break;
  case 'list':
    for (let task of toDo.list()) {
      console.log('=============TODO============='.green);
      console.log(`ID: ${task.id} ${task.description}`);
      console.log(`Status: ${task.complete}`);
      console.log('=============================='.green);
    }
    break;
  case 'update':
    toDo.update(argv.id, argv.description, argv.complete);
    break;
  default:
    console.log('Comand not found!');
}
