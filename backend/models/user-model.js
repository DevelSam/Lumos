const moongose = require('mongoose')

const UserSchema = new moongose.Schema({
  email: { type: String, require },
  name: { type: String, default: 'Пользователь' },
  password: String,
  linkActivate: String,
  isActive: { type: Boolean, default: false },
})

const User = moongose.model('User', UserSchema)
module.exports = User
