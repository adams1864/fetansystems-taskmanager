require('dotenv').config();

const { DataSource } = require('typeorm');

const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: { rejectUnauthorized: false }, // Aiven SSL
  entities: ['dist/**/*.entity.js'], // Adjust path
  migrations: ['dist/migrations/*.js'], // Adjust path
  synchronize: false // Set to true only for dev
});

module.exports = { AppDataSource };
