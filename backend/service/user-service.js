const User = require('../models/user-model')
const bcrypt = require('bcrypt')
const process = require('process')
const ApiError = require('../exceptions/apiError')
const TokenService = require('./token-service')
const UserDto = require('../dtos/user-dto')
const mailerService = require('./mailer-service')
const crypto = require('crypto')
class UserServise {
  g
  async login(email, password) {
    const candidate = await User.findOne({ email: email })
    if (!candidate) {
      throw ApiError.BadRequest('Пользователя не существует ')
    }
    const validPassword = await bcrypt.compareSync(password, candidate.password)

    if (!validPassword) {
      throw ApiError.BadRequest('Пароль не верный')
    }
    const userDto = new UserDto(candidate)
    const token = TokenService.generateAccesToken({ ...userDto })

    await TokenService.saveToken(userDto.id, token)
    return { token: token, user: userDto }
  }
  async registration(email, name, password) {
    if (email === ' ' || password === ' ') {
      throw ApiError.BadRequest('Ошибка Все поля должны быть заполнены')
    }
    const candidate = await User.findOne({ email: email })
    console.log(candidate)
    if (candidate) {
      throw ApiError.BadRequest('Пользователь с таким данными уже существует ')
    }

    const hashpassword = bcrypt.hashSync(password, 8)
    const activationLink = crypto.randomUUID()
    const user = await User.create({ email: email, name: name, password: hashpassword, linkActivate: activationLink })

    const mailSend = await mailerService.sendActivationMail(
      email,
      `${process.env.API_URL}/api/user/activate/` + activationLink,
    )
    console.log(mailSend)
    const userDto = new UserDto(user)
    const token = await TokenService.generateAccesToken({ ...userDto })
    await TokenService.saveToken(userDto.id, token)

    return { token, userDto }
  }
  async getUserInfo(id) {
    const user = await User.findOne({ _id: id }).select('-password')
    if (user === null) {
      throw ApiError.UnauthorizetError()
    }
    return user
  }
  async postUserInfo(id, name) {
    const user = await User.findOneAndUpdate({ _id: id }, { name: name })
    if (user === null) {
      throw new Error({ message: 'Пользователь с таким данными не найден' })
    }

    return user
  }
  async activate(link) {
    const user = await User.findOne({ linkActivate: link })
    if (!user) {
      throw ApiError.BadRequest('Некорректная ссылка авторизации')
    }
    user.isActive = true
    await user.save()
  }
}
module.exports = new UserServise()
