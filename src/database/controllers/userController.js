const userServices = require('../services/userService')

const createUser = async  (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = await userServices.createUser(username, email, password);

    return res.status(201).json(newUser);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};


module.exports = {createUser};