const UserDTO = require('../dto/userDTO')
const userData = [{name:'test'}]
const users = {}; // Simulated in-memory database
/* 
!Sample code in case of DB
const User = require('../models/userModel');



exports.getAllUsers = async () => {
  return await User.find();
};

*/

exports.getAllUsers = async() => {
  console.log('get all******************',userData)
  return await {name:'testing only'};
};

exports.getUserById = async(id) => {
  return await users[id];
};

exports.createUser = (user) => {
  const id = Date.now().toString();
  // users[id] = { id, ...user };
  // return users[id];
  // let obj = new UserDTO(id,user.name,user.email)
  return userData.push({...new UserDTO(id,user.name,user.email)})
};

exports.updateUser = (id, user) => {
  if (users[id]) {
    users[id] = { id, ...user };
    return users[id];
  }
  return null;
};

exports.deleteUser = (id) => {
  delete users[id];
};
