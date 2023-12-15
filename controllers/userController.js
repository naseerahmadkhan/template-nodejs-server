const userService = require('../services/userService');
const validationUtils = require('../utils/validationUtils');

exports.getAllUsers = (req, res) => {
  try {
    console.log('get user');
    const users = userService.getAllUsers();
    res.json(JSON.stringify({test:'good testing'}));
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getUserById = (req, res) => {
  try {
    const user = userService.getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.createUser = (req, res) => {
  try {
    const user = req.body;

    console.log('user', req.body);

    if (!validationUtils.isValidEmail(user.email) || !validationUtils.isValidName(user.name)) {
      return res.status(400).json({ error: 'Invalid input' });
    }

    const newUser = userService.createUser(user);
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateUser = (req, res) => {
  try {
    const updatedUser = userService.updateUser(req.params.id, req.body);
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.deleteUser = (req, res) => {
  try {
    const userDeleted = userService.deleteUser(req.params.id);
    if (!userDeleted) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
