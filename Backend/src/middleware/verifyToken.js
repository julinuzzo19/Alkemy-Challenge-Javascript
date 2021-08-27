const jwt = require('jsonwebtoken');
const db = require('../db/dbConfig.js');

const verifyToken = async (req, res, next) => {
  try {
    const tokenReceived = req.headers['authorization'];
    const token = tokenReceived.split(' ')[1];

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    db.query('select * from users where user_id = ?', decoded, (error, rows) => {
      if (error) res.json({error: error.sqlMessage});
      if (rows) {
        req.user_id = decoded;
        next();
      } else res.status(404).json({message: 'User not found'});
    });
  } catch (error) {
    res.status(403).json({message: 'Token must provided', error});
  }
};

module.exports = verifyToken;
