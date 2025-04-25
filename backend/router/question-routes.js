const {getQestions, postQuestion} = require('../controllers/questions-constroller.js')
const { Router } = require("express")
const authMiddleware = require('../middleware/authMiddleware.js')
const QuestionRouter = new Router()
QuestionRouter.get('/user/questions', authMiddleware, getQestions)
QuestionRouter.post('/user/questions', authMiddleware, postQuestion)

module.exports = QuestionRouter