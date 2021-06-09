const express = require('express');
const ejs=require('ejs');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const pageRoute = require('./routes/pageRoute');
const workRoute = require('./routes/workRoute');

const app = express();


//Connecting DB
mongoose
  .connect('mongodb://localhost/freelancerApp-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('DB Connected Successfully');
  }).catch((err)=> {
    console.log(err)
})

//Template engine 
app.set("view engine", "ejs");

//Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(fileUpload());  

//Routes

app.use('/',pageRoute);
app.use('/works',workRoute);

const port= 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});