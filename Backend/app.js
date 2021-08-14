const express = require('express');
const app = express();
require('dotenv').config();
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.listen(app.get('port'), () => {
  console.log(`App listening at http://localhost:${app.get('port')}`);
});
