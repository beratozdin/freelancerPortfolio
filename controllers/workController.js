const Work = require('../models/Work');
const fs = require('fs');
const path=require('path');

exports.createWork = (req, res) => {

    try{
        const uploadDir = 'public/uploads';
        console.log(req.body);
        if (!fs.existsSync(uploadDir)) {
          fs.mkdirSync(uploadDir);
        }
        
        let uploadeImage = req.files.image;
        let uploadPath = __dirname + '/../public/uploads/'+ uploadeImage.name;
        
        uploadeImage.mv(uploadPath , async () => {
          await Work.create({
            ...req.body,
            image: '/uploads/' + uploadeImage.name,
          });
          res.status(201).redirect('/');
        });
        } catch (error) {
          res.status(400).redirect('/');
        }
};