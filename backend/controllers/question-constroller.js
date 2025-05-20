const QuestionService = require('../service/questions-service')

class QuestionController {
  async getQuestions(req, res, next) {
    try {
      const id = req.tokenData.id
      const question = await QuestionService.getQuestions(id)
      res.json(question)
    } catch (e) {
      next(e)
    }
  }
  async postQuestion(req, res, next) {
    try {
      const id = req.tokenData.id
      const text = req.body.questionText
      const question = await QuestionService.addQuestion(id, text)

      res.json(question)
    } catch (e) {
      next(e)
    }
  }
  async deleteQuestion(req, res, next) {
    try {
      const id = req.tokenData.id
      const questionId = req.body.questionId
      const question = await QuestionService.removeQuestion(id, questionId)

      res.json(question)
    } catch (e) {
      next(e)
    }
  }
}

module.exports = new QuestionController()
