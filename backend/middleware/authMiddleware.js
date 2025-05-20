const jwt = require('jsonwebtoken')
const process = require('process')
const User = require('../models/user-model')
const tokenService = require('../service/token-service')
const ApiError = require('../exceptions/apiError')
module.exports = async function (req, res, next) {
  if (req.method === 'OPTIONS') {
    next()
  }
  try {
    const token = req.headers.authorization.split(' ')[1]

    if (!token) {
      return next(ApiError.UnauthorizetError())
    }
    const decodedData = await tokenService.verificationToken(token)
    req.tokenData = decodedData
    next()
  } catch (e) {
    return next(ApiError.UnauthorizetError())
  }
}
