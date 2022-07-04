const taskService = require('../services/taskServices')


const getTask = async  (req, res) => {
  try {
    const { ownerId } = req.body;
    const tasks = await taskService.getTask(ownerId);

    return res.status(200).json(tasks);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};


const deleteTask = async  (req, res) => {
  try {
    const { id } = req.body;
    const tasks = await taskService.deleteTask(id);

    return res.status(200).json(tasks);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const updateTaskContent = async  (req, res) => {
  try {
    const { id, taskContent } = req.body;
    const task = await taskService.updateTaskContent(id, taskContent);

    return res.status(200).json(task);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const updateTaskStatus = async  (req, res) => {
  try {
    const { id, taskStatus } = req.body;
    const task = await taskService.updateTaskContent(id, taskStatus);

    return res.status(200).json(task);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};



const createTask = async  (req, res) => {
  try {
    const { taskContent, ownerId,taskStatus } = req.body;
    const NewTask = await taskService.createTask(taskContent, ownerId,taskStatus);

    return res.status(201).json(NewTask);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {createTask,getTask,deleteTask,updateTaskContent,updateTaskStatus};