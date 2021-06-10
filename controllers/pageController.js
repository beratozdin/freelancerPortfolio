const Work = require('../models/Work');
const nodemailer = require('nodemailer');
exports.getIndexPage = async (req, res) => {

  const works = await Work.find({});

  res.status(200).render('index',{
    works
  });
};

exports.getAboutPage = (req, res) => {
  res.status(200).render('about');
};

exports.getContactPage = (req, res) => {
  res.status(200).render('contact');
};

exports.getAddPage = (req, res) => {
  res.status(200).render('add');
};

exports.getEditPage = async (req, res) => {
  
  const work = await Work.findOne({slug : req.params.slug});

  res.status(200).render('edit',{
    work
  });
};

exports.sendEmail = async (req, res) => {

  const outputMessage = `
  <h1>A mail from freelancer contact page</h1>
  <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
  </ul>
  <h1>Message</h1>
  <p>${req.body.message}</p>
  `

 
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: " ", // gmail account
      pass: " ", // gmail password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: ' ', // sender address
    to: " ", // list of receivers
    subject: "Contact Form New Message ✔", // Subject line
    html: outputMessage, // html body
  });
  res.status(200).redirect('/contact');
  

  
 
};
