const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
require('dotenv').config();
app.set('port', process.env.PORT || 3000);
let operationRouter = require('./src/routes/operations.routes');
let authRouter = require('./src/routes/auth.routes');

//middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors())
//routes
app.use('/api/operations', operationRouter);
app.use('/api/', authRouter);

app.listen(app.get('port'), () => {
  console.log(`App listening at http://localhost:${app.get('port')}`);
});
