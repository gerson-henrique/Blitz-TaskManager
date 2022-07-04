const taskService = require('../services/taskServices')

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


module.exports = {createTask};