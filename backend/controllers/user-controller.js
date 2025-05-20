const UserServise = require('../service/user-service.js')

class UserController {
  async login(req, res, next) {
    try {
      const { email, password } = req.body
      const data = await UserServise.login(email, password)
      return res.json(data)
    } catch (e) {
      next(e)
    }
  }
  async registration(req, res, next) {
    try {
      const { email, name, password } = req.body
      const user = await UserServise.registration(email, name, password)
      res.status(200).json(user)
    } catch (e) {
      next(e)
    }
  }
  async getUserInfo(req, res, next) {
    try {
      const id = req.tokenData.id
      const user = await UserServise.getUserInfo(id)
      return res.json(user)
    } catch (e) {
      next(e)
    }
  }
  async postUserInfo(req, res, next) {
    try {
      const name = req.body.name
      const id = req.tokenData.id
      const user = await UserServise.postUserInfo(id, name)
      return res.json(user)
    } catch (e) {
      next(e)
    }
  }
  async activate(req, res, next) {
    try {
      const activateLink = req.params.link
      await UserServise.activate(activateLink)
      res.redirect(process.env.CLIENT_URL)
    } catch (e) {
      next(e)
    }
  }
}

module.exports = new UserController()
