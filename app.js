const express = require('express');
const ejs=require('ejs');

const app = express();

//Middlewares
app.set("view engine", "ejs");
app.use(express.static('public'));


//Routes
app.get('/', (req, res) => {

    res.render('index');
});


const port= 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});