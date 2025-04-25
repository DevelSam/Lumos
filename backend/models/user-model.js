const moongose = require('mongoose')

const UserSchema = new moongose.Schema({
    name:String,
    password:String,
    filmLikes: [{filmId:String, filmLike:Boolean}]
})

const User = moongose.model('User', UserSchema)
module.exports= User