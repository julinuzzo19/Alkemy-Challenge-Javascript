const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const db = require('../db/dbConfig.js');

const authController = {
  login: async (req, res) => {
    const {email, password} = req.body;

    db.query('select * from users where email = ?', email, async (error, rows) => {
      if (error) res.json({error: error.sqlMessage});

      if (rows.length > 0) {
        let isEqual = await comparePassword(password, rows[0].password);
        if (isEqual) {
          const token = jwt.sign(rows[0].user_id, process.env.SECRET_KEY);
          res.json({token});
        } else {
          res.json({message: 'Incorrect data'});
        }
      } else res.json({message: 'User not found'});
    });
  },
  register: async (req, res) => {
    const {email, password} = req.body;

    const passwordEncrypted = await encryptPassword(password);

    const newUser = {email, password: passwordEncrypted};

    db.query('insert into users set ?', newUser, (error, rows) => {
      if (error) res.json({error: error.sqlMessage});

      res.status(201).json({message: 'User created!'});
    });
  }
};

const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);

  return await bcrypt.hash(password, salt);
};

const comparePassword = async (receivedPassword, password) => {
  return await bcrypt.compare(receivedPassword, password);
};

module.exports = authController;
