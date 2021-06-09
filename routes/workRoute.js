const express = require('express');
const workController = require('../controllers/workController');

const router=express.Router();

//Work routes
router.route('/').post(workController.createWork);

module.exports = router;