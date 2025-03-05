const adminController = require('../controllers/user.controller')
const express = require('express')
const router = express.Router();

router.post('/register', adminController.register)

module.exports = router;