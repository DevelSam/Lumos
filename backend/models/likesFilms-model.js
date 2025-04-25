const moongose = require('mongoose')


const LikesFilmsSchema = new moongose.Schema({
    userId:{type:moongose.Schema.Types.ObjectId, ref:'User',},
    filmId :String,
    filmLike: Boolean
})

const LikesFilms = moongose.model('LikesFilms', LikesFilmsSchema)

module.exports = LikesFilms