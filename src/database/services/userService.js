const { User } = require('../models')

const createUser = (userName, email, password) => {
  const newUser = User.create(userName, email, password)
  return newUser
}


module.exports = {createUser};