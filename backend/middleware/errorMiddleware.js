const ApiError = require('../exceptions/apiError')

module.exports = (err, req, res, next) => {
  console.log(err)
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message })
  }
  return res.status(500).json({ message: 'Ошибка на сервере' })
}
