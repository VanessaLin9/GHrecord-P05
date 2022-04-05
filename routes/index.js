const express = require('express')
const router = express.Router()
const passport = require('../config/passport')

const recordController = require('.././controllers/record_controller')
const userController = require('../controllers/user_controller')
const { authenticated } = require('../middleware/auth')
const { generalErrorHandler } = require('../middleware/error-handler')

// 註冊帳號
router.get('/signup', userController.signUpPage)
router.post('/signup', userController.signUp)

// 登入登出
router.get('/signin', userController.signInPage)
router.post('/signin', passport.authenticate('local', { failureRedirect: '/signin', failureFlash: true }), userController.signIn)
router.get('/logout', userController.logout)

// 遊戲紀錄分頁
router.get('/records', authenticated,recordController.getRecordPage)

// 首頁
router.get('/host', authenticated, recordController.getHomePage)
router.post('/host', recordController.addRecord)
router.get('/', (req, res) => res.redirect('/host'))
router.use('/', generalErrorHandler)

module.exports = router