const { Task } = require('../models')

const createTask = async (taskContent, ownerId, taskStatus) => {
  const newTask = await Task.create({taskContent, ownerId,taskStatus})
  return newTask 
}

const getTask = async (ownerId) => {
  const tasks = await Task.findAll({where: {ownerId} });
  return tasks 
}

const deleteTask = async (id) => {
  const tasks = await Task.destroy({where: {id} });
  return tasks 
}

const updateTaskStatus = async (taskStatus, id) => {
  const task = await Task.update({taskStatus},{where: {id} });
  return task 
}

const updateTaskContent = async (id, taskContent) => {
  const task = await Task.update({taskContent},{where: {id} });
  return task 
}



module.exports = { createTask,getTask,deleteTask,updateTaskContent,updateTaskStatus};