const express = require('express')
const router = express.Router()

const recordController = require('.././controllers/record_controller')
const userController = require('../controllers/user_controller')

router.get('/signup', userController.signUpPage)
router.post('/signup', userController.signUp) 
router.get('/host', recordController.getHomePage)
router.use('/', (req, res) => res.redirect('/host'))

module.exports = router