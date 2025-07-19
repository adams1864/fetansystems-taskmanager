const { AppDataSource } = require('../config/database');
const { User } = require('../models/user.entity');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  const userRepository = AppDataSource.getRepository('User');
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = userRepository.create({ name, email, password: hashedPassword });
  await userRepository.save(user);
  res.status(201).json({ message: 'User created' });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const userRepository = AppDataSource.getRepository('User');
  const user = await userRepository.findOne({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
  res.json({ token });
};

module.exports = { signup, login };