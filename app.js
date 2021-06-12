const express = require('express');
const ejs=require('ejs');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');
const session = require('express-session');
const MongoStore = require('connect-mongo'); 
const pageRoute = require('./routes/pageRoute');
const workRoute = require('./routes/workRoute');
const userRoute = require('./routes/userRoute');
const app = express();

//Connecting DB
mongoose
  .connect('mongodb+srv://berat:83xy1o8h73vMsQXG@cluster0.qnyw8.mongodb.net/freelancerDB?retryWrites=true&w=majority', {
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

//Checking user for login/logout 
global.userIN = null;

//Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(fileUpload());
app.use(
  session({
    secret: 'my_keyboard_cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb+srv://berat:83xy1o8h73vMsQXG@cluster0.qnyw8.mongodb.net/freelancerDB?retryWrites=true&w=majority' }),
  })
);  
app.use(methodOverride('_method',{

  methods:['POST','GET']
}));

//Routes
app.use('*', (req, res, next) => {
  userIN = req.session.userID;
  next();
});
app.use('/',pageRoute);
app.use('/users',userRoute);
app.use('/works',workRoute);

const port= process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});