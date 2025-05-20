const moongose = require('mongoose')

const tokenSchema = new moongose.Schema({
  userId: { type: moongose.Schema.Types.ObjectId, ref: 'User' },
  token: String,
})

const Token = moongose.model('tokenSchema', tokenSchema)

module.exports = Token
