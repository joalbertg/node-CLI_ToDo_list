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
    console.log('List TODOS');
    break;
  case 'update':
    console.log('Update TODO');
    break;
  default:
    console.log('Comand not found!');
}
