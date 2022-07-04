const { Task } = require('../models')

const createTask = (taskContent, ownerId, taskStatus) => {
  const newTask = Task.create({taskContent, ownerId,taskStatus})
  return newTask 
}


module.exports = { createTask};