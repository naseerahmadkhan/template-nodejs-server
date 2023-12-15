const userDAO = require('../dao/userDao');

exports.getAllUsers = () => {
  return userDAO.getAllUsers();
};

exports.getUserById = (id) => {
  return userDAO.getUserById(id);
};

exports.createUser = (user) => {
  return userDAO.createUser(user);
};

exports.updateUser = (id, user) => {
  return userDAO.updateUser(id, user);
};

exports.deleteUser = (id) => {
  userDAO.deleteUser(id);
};
