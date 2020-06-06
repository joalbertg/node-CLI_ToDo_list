const colors = require('colors');

const { argv } = require('./config');
const toDo = require('./todo');
const { list } = require('./decorators');

//console.log(argv);

let command = argv._[0];

switch ( command ) {
  case 'create':
    let todo = toDo.create(argv.description);
    list(toDo.list());
    break;
  case 'list':
    list(toDo.list());
    break;
  case 'update':
    toDo.update(argv.id, argv.description, argv.complete);
    list(toDo.list());
    break;
  case 'delete':
    toDo.remove(argv.id);
    list(toDo.list());
    break;
  default:
    console.log('Comand not found!'.red);
}
