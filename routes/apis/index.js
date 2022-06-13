const express = require('express')
const router = express.Router()
const passport = require('../../config/passport')

const recordController = require('../../controllers/apis/record_controller')

router.get('/records',recordController.getRecordPage)

module.exports = router