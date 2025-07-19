const { AppDataSource } = require('../config/database');
const { Like } = require('typeorm');

const createTask = async (req, res) => {
  const { name } = req.body;
  const taskRepository = AppDataSource.getRepository('Task');
  const task = taskRepository.create({ name, user: { id: req.user.id } });
  await taskRepository.save(task);
  res.status(201).json(task);
};

const getTasks = async (req, res) => {
  const { page = 1, limit = 10, search = '' } = req.query;
  const taskRepository = AppDataSource.getRepository('Task');
  const [tasks, total] = await taskRepository.findAndCount({
    where: { user: { id: req.user.id }, name: Like(`%${search}%`) },
    take: parseInt(limit),
    skip: (parseInt(page) - 1) * parseInt(limit),
  });
  res.json({ tasks, total, page: parseInt(page), limit: parseInt(limit) });
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const taskRepository = AppDataSource.getRepository('Task');
  const task = await taskRepository.findOne({ where: { id: parseInt(id), user: { id: req.user.id } } });
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }
  task.status = status;
  await taskRepository.save(task);
  res.json(task);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  const taskRepository = AppDataSource.getRepository('Task');
  const task = await taskRepository.findOne({ where: { id: parseInt(id), user: { id: req.user.id } } });
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }
  await taskRepository.remove(task);
  res.status(204).send();
};

module.exports = { createTask, getTasks, updateTask, deleteTask };