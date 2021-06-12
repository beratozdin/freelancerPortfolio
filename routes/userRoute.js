const express = require('express')
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');
const User = require('../models/User');

const router = express.Router();

router.route('/login').post(authController.loginUser);
router.route('/logout').get(authController.logoutUser);

module.exports = router;