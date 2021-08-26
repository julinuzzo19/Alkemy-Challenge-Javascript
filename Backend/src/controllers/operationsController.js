const db = require('../db/dbConfig.js');

const operationsController = {
  create: (req, res) => {
    const {concepto, monto, fecha, tipo, category_id} = req.body;

    const newOperation = {concepto, monto, fecha, tipo, category_id};

    db.query('insert into operations set ?', [newOperation], (error, rows) => {
      if (error) res.json({error: error.sqlMessage});
      res.json({
        rows
      });
    });
  },
  getAll: (req, res) => {
    let {tipo} = req.query;
    if (tipo) {
      db.query('select * from operations where tipo = ?', tipo, (error, rows) => {
        if (error) res.json({error: error.sqlMessage});
        res.json({
          rows
        });
      });
    } else {
      db.query('select * from operations', (error, rows) => {
        if (error) res.json({error: error.sqlMessage});
        res.json({
          rows
        });
      });
    }
  },
  getById: (req, res) => {
    let id = req.params.id;

    db.query(
      'select * from operations where operation_id = ?',
      id,
      (error, rows) => {
        if (error) res.json({error: error.sqlMessage});

        res.json({rows});
      }
    );
  },
  update: (req, res) => {
    let id = req.params.id;

    const {concepto, monto, fecha} = req.body;
    const updatedOperation = {concepto, monto, fecha};

    db.query(
      'update operations SET ? where operation_id = ?',
      [updatedOperation, id],
      (error, rows) => {
        if (error) res.json({error: error.sqlMessage});
        res.json({
          rows
        });
      }
    );
  },
  remove: (req, res) => {
    let id = req.params.id;

    db.query('delete from operations where operation_id = ?', id, (error, rows) => {
      if (error) res.json({error: error.sqlMessage});
      res.json({
        rows
      });
    });
  }
};

module.exports = operationsController;
