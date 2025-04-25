const Question = require("../models/question-model")

const getQestions = async (req, res) => {
    try{
    const question = await Question.find({userId:req.tokenData.id})
    console.log(question)
        if(question.length == 0){
            res.status(400).send('У пользователя нет вопросов!')
        }
        else{
            res.json(question)
        }
    
    }
    catch(e){
        res.status(400).send('Ошибка сервера ' + e)
    }
}
const postQuestion = async (req, res) => {
    try{

        const question = await Question.create({userId:req.tokenData.id, questionText:req.body.question,})

        question.save()
        res.status(200).json({message:'Вопрос пользователя создан'})
    }
    catch (e){
        res.status(400).send('Ошибка сервера ' + e)
    }
}
module.exports= {getQestions, postQuestion}