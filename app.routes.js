const express = require('express')
const router = express.Router()

const pingCtrl = require('./controllers/ping')
router.get('/', pingCtrl.ping)

module.exports = router
