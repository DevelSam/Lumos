const { Router } = require('express')

const UserController = require('../controllers/user-controller')
const authMiddleware = require('../middleware/authMiddleware.js')
const errorMiddleware = require('../middleware/errorMiddleware.js')
const UserRouter = new Router()

UserRouter.post('/user/login', UserController.login, errorMiddleware)
UserRouter.post('/user/registration', UserController.registration, errorMiddleware)
UserRouter.get('/user/info', authMiddleware, UserController.getUserInfo, errorMiddleware)
UserRouter.get('/user/activate/:link', UserController.activate)

module.exports = UserRouter
