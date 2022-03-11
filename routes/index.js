const express = require('express')
const router = express.Router()
const passport = require('../config/passport')

const recordController = require('.././controllers/record_controller')
const userController = require('../controllers/user_controller')
const { generalErrorHandler } = require('../middleware/error-handler')

router.get('/signup', userController.signUpPage)
router.post('/signup', userController.signUp)

router.get('/signin', userController.signInPage)
router.post('/signin', passport.authenticate('local', { failureRedirect: '/signin', failureFlash: true }), userController.signIn)
router.get('/logout', userController.logout)

router.get('/host', recordController.getHomePage)
router.get('/', (req, res) => res.redirect('/host'))
router.use('/', generalErrorHandler)

module.exports = router