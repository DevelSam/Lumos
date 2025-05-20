const Token = require('../models/token-model')
const jwt = require('jsonwebtoken')
class TokenService {
  generateAccesToken(payload) {
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '30d' })
    return token
  }
  verificationToken(token) {
    const userData = jwt.verify(token, process.env.JWT_SECRET_KEY)
    return userData
  }
  async saveToken(id, userToken) {
    const tokenAcces = await Token.findOne({ userId: id })
    if (tokenAcces) {
      tokenAcces.token = userToken
      return tokenAcces.save()
    }
    const newToken = await Token.create({ userId: id, token: userToken })
    return newToken
  }
}
module.exports = new TokenService()
