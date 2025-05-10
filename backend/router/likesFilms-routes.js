const {addFilmLike, changeLikeFilm, checkFilmLike, removeFilmLike} = require('../controllers/likesFilms-controller.js')
const { Router } = require("express")
const authMiddleware = require('../middleware/authMiddleware.js')
const LikesFilmsRouter = new Router()

LikesFilmsRouter.post('/user/likeFilms', authMiddleware, addFilmLike)
LikesFilmsRouter.get('/user/likeFilms', authMiddleware, checkFilmLike)
LikesFilmsRouter.delete('/user/likeFilms', authMiddleware, removeFilmLike)
LikesFilmsRouter.put('/user/likeFilms', authMiddleware, changeLikeFilm)
module.exports = LikesFilmsRouter