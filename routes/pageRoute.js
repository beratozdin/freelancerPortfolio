const express = require('express');
const pageController=require('../controllers/pageController');

const router=express.Router();

//Page routes
router.route('/').get(pageController.getIndexPage);
router.route('/about').get(pageController.getAboutPage);
router.route('/contact').get(pageController.getContactPage);
router.route('/contact').post(pageController.sendEmail);
router.route('/add').get(pageController.getAddPage);
router.route('/works/edit/:slug').get(pageController.getEditPage);

module.exports = router;