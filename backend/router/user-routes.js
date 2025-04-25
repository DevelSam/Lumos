const { Router } = require("express")


const {login, registration, getUserInfo}  = require('../controllers/user-controller')
const authMiddleware = require('../middleware/authMiddleware.js')
const UserRouter = new Router()

UserRouter.post('/user/login', login)
UserRouter.post('/user/registration', registration)
UserRouter.get('/user/info', authMiddleware, getUserInfo )


module.exports = UserRouter