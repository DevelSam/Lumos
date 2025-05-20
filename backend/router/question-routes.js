const QuestionController = require('../controllers/question-constroller.js')
const { Router } = require('express')
const authMiddleware = require('../middleware/authMiddleware.js')
const errorMiddleware = require('../middleware/errorMiddleware.js')
const QuestionRouter = new Router()
QuestionRouter.get('/user/questions', authMiddleware, QuestionController.getQuestions, errorMiddleware)
QuestionRouter.delete('/user/questions', authMiddleware, QuestionController.deleteQuestion, errorMiddleware)
QuestionRouter.post('/user/questions', authMiddleware, QuestionController.postQuestion, errorMiddleware)

module.exports = QuestionRouter
