const {addFilmLike, changeLikeFilm, checkFilmLike} = require('../controllers/likesFilms-controller.js')
const { Router } = require("express")
const authMiddleware = require('../middleware/authMiddleware.js')
const LikesFilmsRouter = new Router()

LikesFilmsRouter.post('/user/likeFilms', authMiddleware, addFilmLike)
LikesFilmsRouter.get('/user/likeFilms', authMiddleware, checkFilmLike)

LikesFilmsRouter.put('/user/likeFilms', authMiddleware, changeLikeFilm)
module.exports = LikesFilmsRouter