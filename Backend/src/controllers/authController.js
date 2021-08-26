const db = require('../db/dbConfig.js');

const authController = {
  login: (req, res) => {
    const {email, password} = req.body;

    db.query('')


  },
  register: (req, res) => {}
};

const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);

  return await bcrypt.hash(password, salt);
};

const comparePassword = async (receivedPassword, password) => {
  return await bcrypt.compare(receivedPassword, password);
};

module.exports = authController;
