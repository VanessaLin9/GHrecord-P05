const express = require('express')
const router = express.Router()
const passport = require('../../config/passport')

const recordController = require('../../controllers/apis/record_controller')
const playerController = require('../../controllers/apis/player_controller')

router.get('/records',recordController.getRecordPage)

router.get('/players',playerController.getPlayerList)

module.exports = router