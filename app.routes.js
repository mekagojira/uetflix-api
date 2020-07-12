const express = require('express')
const router = express.Router()

const pingCtrl = require('./controllers/ping')
router.get('/', pingCtrl.ping)

const authCtrl = require('./controllers/auth')
router.post('/auth/register', authCtrl.register)
router.post('/auth/register/information', authCtrl.authMiddleware, authCtrl.postInformation)
router.post('/auth/login', authCtrl.login)
router.post('/auth/test', authCtrl.authMiddleware, authCtrl.testAuth)

const movieCtrl = require('./controllers/movies')
router.get('/movies', authCtrl.authMiddleware, movieCtrl.getMovies)
router.get('/movies/:id', authCtrl.authMiddleware, movieCtrl.getMovie)
router.get('/movies/:id/ratings', authCtrl.authMiddleware, movieCtrl.getMovieRatings)
router.post('/movies/:id/ratings', authCtrl.authMiddleware, movieCtrl.reviewMovie)
router.post('/movies/:id/ratings/own', authCtrl.authMiddleware, movieCtrl.getOwnReview)

module.exports = router
