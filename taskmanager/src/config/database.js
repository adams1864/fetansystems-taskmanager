const { DataSource } = require('typeorm');
const { User } = require('../models/user.entity');
const { Task } = require('../models/task.entity');

const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'task_manager',
  entities: [User, Task],
  synchronize: true, // Set to false in production
});

module.exports = { AppDataSource };