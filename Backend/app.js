const express = require('express');
const app = express();
const mysql = require('mysql');
require('dotenv').config();
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
//connection
var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect();

app.listen(app.get('port'), () => {
  console.log(`App listening at http://localhost:${app.get('port')}`);
});
