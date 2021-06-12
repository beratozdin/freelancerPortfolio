const express = require('express');
const pageController = require('../controllers/pageController');
const authMiddleware = require('../middlewares/authMiddleware');

const router=express.Router();

//Page routes
router.route('/').get(pageController.getIndexPage);
router.route('/about').get(pageController.getAboutPage);
router.route('/contact').get(pageController.getContactPage);
router.route('/login').get(pageController.getLoginPage);
router.route('/contact').post(pageController.sendEmail);
router.route('/add').get(authMiddleware, pageController.getAddPage);
router.route('/works/edit/:slug').get(authMiddleware, pageController.getEditPage);

module.exports = router;