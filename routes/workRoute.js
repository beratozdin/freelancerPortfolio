const express = require('express');
const workController = require('../controllers/workController');

const router=express.Router();

//Work routes
router.route('/').post(workController.createWork);
router.route('/:slug').get(workController.getWork);
router.route('/:slug').put(workController.updateWork);
router.route('/:slug').delete(workController.deleteWork);

module.exports = router;