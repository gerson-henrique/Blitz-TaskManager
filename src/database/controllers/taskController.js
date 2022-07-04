const express = require('express');
const { Tasks } = require('../models');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { id } = req.body;
    const tasks = await Tasks.findAll({
      where: {
        id: { id }
      }
    });

    return res.status(200).json(tasks);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

module.exports = router;