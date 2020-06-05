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

const argv = require('yargs')
  .command('create', 'Create a TODO', opts_create)
  .command('update', 'Update a TODO, description and complete', opts_update)
  .help()
  .argv;

module.exports = {
  argv
};

