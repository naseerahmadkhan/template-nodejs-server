const emailValidator = require('email-validator');

exports.isValidEmail = (email) => {
  return emailValidator.validate(email);
};

exports.isValidName = (name) => {
  return name.trim() !== '';
};
