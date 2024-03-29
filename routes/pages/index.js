const express = require('express')
const router = express.Router()
const passport = require('../../config/passport')

const recordController = require('../../controllers/pages/record_controller')
const userController = require('../../controllers/pages/user_controller')
const playerController = require('../../controllers/pages/player_controller')
const { authenticated } = require('../../middleware/auth')
const { generalErrorHandler } = require('../../middleware/error-handler')

// 註冊帳號
// router.get('/signup', userController.signUpPage)
// router.post('/signup', userController.signUp)

// 登入登出
router.get('/signin', userController.signInPage)
router.post('/signin', passport.authenticate('local', { failureRedirect: '/signin', failureFlash: true }), userController.signIn)
router.get('/logout', userController.logout)

// 遊戲紀錄分頁
router.get('/records', authenticated,recordController.getRecordPage)
router.get('/records/edit/:id', authenticated, recordController.getEditRecord)
router.put('/records/edit/:id', authenticated, recordController.postEditRecord)
router.delete('/records/:id', authenticated, recordController.deleteRecord)

// 玩家資訊分頁
router.get('/players/edit/:id', authenticated, playerController.editPlayer)
router.put('/players/edit/:id', authenticated, playerController.postEditPlayer)
router.get('/players/addPlayer', authenticated, playerController.addPlayerPage)
router.post('/players/addPlayer', authenticated, playerController.postAddPlayer)
router.get('/players', authenticated, playerController.getPlayerList)

// 首頁
router.get('/host', authenticated, recordController.getHomePage)
router.post('/host', recordController.addRecord)
router.get('/', (req, res) => res.redirect('/host'))
router.use('/', generalErrorHandler)

module.exports = router