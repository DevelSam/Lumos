const Question = require('../models/question-model')

const ApiError = require('../exceptions/apiError')
class QuestionService {
  async getQuestions(id) {
    const question = await Question.find({ userId: id })
    console.log(question)
    if (question.length == 0) {
      throw ApiError.BadRequest('У пользователя нет вопросов!')
    }
    return question
  }
  async addQuestion(id, text) {
    const candidate = await Question.findOne({ userId: id, questionText: text })
    if (candidate) {
      throw ApiError.BadRequest('Такой вопрос уже существует')
    }
    const question = await Question.create({ userId: id, questionText: text })
    question.save()
    return { message: 'Вопрос пользователя создан' }
  }
  async removeQuestion(id, questionId) {
    const question = await Question.findOneAndDelete({ userId: id, _id: questionId })

    if (!question) {
      throw ApiError.BadRequest('Вопрос не найден')
    }

    return { message: 'Вопрос пользователя удалён' }
  }
}
module.exports = new QuestionService()
