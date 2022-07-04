const express = require('express');
const taskController = require('../controllers/taskController');

const router = express.Router();
 router.get('/', taskController.getTask);
 router.post('/', taskController.createTask);
 router.put('/content', taskController.updateTaskContent);
 router.put('/status', taskController.updateTaskStatus);
 router.delete('/', taskController.deleteTask);

 module.exports = router;