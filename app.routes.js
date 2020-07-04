const express = require('express')
const router = express.Router()

const pingCtrl = require('./controllers/ping')
router.get('/', pingCtrl.ping)

const authCtrl = require('./controllers/auth')
router.post('/auth/register', authCtrl.register)
router.post('/auth/login', authCtrl.login)
router.post('/auth/test', authCtrl.authMiddleware, authCtrl.testAuth)

module.exports = router
