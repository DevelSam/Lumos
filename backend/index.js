const express = require('express')
const cors = require('cors')
const moongose = require('mongoose')
const process = require('process')
const router = require('./router/user-routes')
const app = express()
const LikesFilmsRouter = require('./router/likesFilms-routes')
const QuestionRouter = require('./router/question-routes')
const PORT = process.env.PORT || 5000
const DB_URL = process.env.DB_URL
//{origin:process.env.CLIENT_URL}
app.use(cors())
app.use(express.json())

app.get('/', (req, res) =>{
    res.send('Начало положено')
})
app.use('/api', router,)
app.use('/api',  LikesFilmsRouter, QuestionRouter)
console.log(DB_URL)
const main = async () => {
    await app.listen(PORT, () => console.log('server runnig')  )
    await moongose.connect(DB_URL)
    
}
main()