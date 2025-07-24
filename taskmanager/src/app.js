require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { AppDataSource } = require('./config/database');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const tasksRouter = require('./routes/tasks');

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/tasks', tasksRouter);

// Initialize database connection
async function initializeApp() {
  try {
    await AppDataSource.initialize();
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection error:', error);
    throw error; // Let Vercel handle the failure
  }
}

// Vercel serverless function handler
module.exports = async (req, res) => {
  await initializeApp(); // Ensure DB is connected

  // Forward the request to Express
  app(req, res);
};
