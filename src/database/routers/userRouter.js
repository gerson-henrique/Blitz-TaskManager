const express = require('express');
const userControllers = require('../controllers/userController');

const router = express.Router();

 router.post('/', userControllers.createUser);

 module.exports = router;