const ApiError = require('../exceptions/apiError')
const LikesFilms = require('../models/likesFilms-model')

class LikesFilmService {
  async addFilmLike(id, filmId, filmLike) {
    const candidate = await LikesFilms.findOne({ userId: id, filmId: filmId })
    if (candidate) {
      await LikesFilms.updateOne({ userId: id, filmId: filmId }, { $set: { filmLike: filmLike } })
      return { message: 'фильм обновлён ' }
    } else {
      const LikesFilm = LikesFilms.create({
        userId: id,
        filmId: filmId,
        filmLike: filmLike,
      })
      LikesFilm.save()
      return { message: 'Любимый фильм сохранён' }
    }
  }
  async checkFilmLike(id) {
    const LikesFilm = await LikesFilms.find({ userId: id })
    console.log(LikesFilm)
    if (!LikesFilm) {
      throw ApiError('У пользователя нету любимых фильмов ')
    } else {
      return LikesFilm
    }
  }
  async removeFilmLike(id, filmId) {
    const LikesFilm = await LikesFilms.findOneAndDelete({ userId: id, filmId: filmId })
    if (!LikesFilm) {
      throw ApiError('Не найден фильм у пользователя')
    } else {
      return { message: 'Фильм успешно удалён' }
    }
  }
}
module.exports = new LikesFilmService()
