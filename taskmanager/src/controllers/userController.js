const { AppDataSource } = require('../config/database');

const getProfile = async (req, res) => {
  const userRepository = AppDataSource.getRepository('User');
  const user = await userRepository.findOne({ where: { id: req.user.id } });
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json({ name: user.name, email: user.email });
};

module.exports = { getProfile };