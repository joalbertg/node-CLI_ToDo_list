const opts_list = {
  all: {
    alias: 'a',
    desc: 'Show all task list',
    default: false
  }
};

const opts_create = {
  description: {
    demand: true,
    alias: 'd',
    desc: 'Description TODO'
  }
};

const opts_update = {
  id: {
    demand: true,
    desc: 'ID Task'
  },
  description: {
    demand: false,
    alias: 'd',
    desc: 'Description TODO'
  },
  complete: {
    alias: 'c',
    default: true,
    desc: 'Complete TODO'
  }
};

const opts_delete = {
  id: {
    demand: true,
    desc: 'ID Task'
  }
};

const argv = require('yargs')
  .command('list', 'Show task list', opts_list)
  .command('create', 'Create an TODO', opts_create)
  .command('update', 'Update an TODO, a description and complete', opts_update)
  .command('delete', 'Delete an TODO with the done property true', opts_delete)
  .help()
  .argv;

module.exports = {
  argv
};

