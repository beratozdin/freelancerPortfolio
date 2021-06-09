const express = require('express');
const ejs=require('ejs');

const pageRoute = require('./routes/pageRoute');

const app = express();

//Middlewares
app.set("view engine", "ejs");
app.use(express.static('public'));

//Routes
app.get('/', (req, res) => {

    res.render('index');
});

app.get('/admin', (req, res) => {

  res.render('login');
});

app.use('/',pageRoute);

const port= 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});