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

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected');
    app.listen(process.env.PORT || 3000, () => {
      console.log('Server running on port 3000');
    });
  })
  .catch((error) => console.log('Database connection error:', error));

module.exports = app;