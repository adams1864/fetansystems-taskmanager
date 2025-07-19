const { EntitySchema } = require('typeorm');
const { User } = require('./user.entity');

module.exports.Task = new EntitySchema({
  name: 'Task',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    name: {
      type: 'varchar',
    },
    status: {
      type: 'varchar',
      default: 'pending',
    },
  },
  relations: {
    user: {
      target: 'User',
      type: 'many-to-one',
      joinColumn: true,
    },
  },
});