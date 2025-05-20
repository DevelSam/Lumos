const LikesFilms = require('../models/likesFilms-model')
const LikeFilmsService = require('../service/likeFilms-service')

class LikesFilmController {
  async addFilmLike(req, res, next) {
    try {
      const userId = req.tokenData.id
      const filmId = req.body.filmId
      const filmLike = req.body.filmLike
      const LikesFilm = await LikeFilmsService.addFilmLike(userId, filmId, filmLike)
      res.json(LikesFilm)
    } catch (e) {
      next(e)
    }
  }

  async checkFilmLike(req, res, next) {
    try {
      const userId = req.tokenData.id
      const LikesFilm = await LikeFilmsService.checkFilmLike(userId)

      res.json(LikesFilm)
    } catch (e) {
      next(e)
    }
  }
  async removeFilmLike(req, res, next) {
    try {
      const userId = req.tokenData.id
      const filmId = req.body.filmId
      const LikesFilm = await LikesFilms.findOneAndDelete(userId, filmId)

      res.json(LikesFilm)
    } catch (e) {
      next(e)
    }
  }
}

module.exports = new LikesFilmController()
