const LikesFilmController = require('../controllers/likesFilms-controller.js')
const { Router } = require('express')
const authMiddleware = require('../middleware/authMiddleware.js')
const errorMiddleware = require('../middleware/errorMiddleware.js')
const LikesFilmsRouter = new Router()

LikesFilmsRouter.post('/user/likeFilms', authMiddleware, LikesFilmController.addFilmLike, errorMiddleware)
LikesFilmsRouter.get('/user/likeFilms', authMiddleware, LikesFilmController.checkFilmLike, errorMiddleware)
LikesFilmsRouter.delete('/user/likeFilms', authMiddleware, LikesFilmController.removeFilmLike, errorMiddleware)
module.exports = LikesFilmsRouter
