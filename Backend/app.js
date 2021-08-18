const express = require('express');
const app = express();
const mysql = require('mysql');
require('dotenv').config();
app.set('port', process.env.PORT || 3000);
let operationRouter = require('./src/routes/operations.routes');

//middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use('/api/operations', operationRouter);


app.listen(app.get('port'), () => {
  console.log(`App listening at http://localhost:${app.get('port')}`);
});
