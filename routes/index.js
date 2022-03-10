const express = require('express')
const router = express.Router()

const recordController = require('.././controllers/record_controller')

router.get('/host', recordController.getHomePage)
router.use('/', (req, res) => res.redirect('/host'))

module.exports = router