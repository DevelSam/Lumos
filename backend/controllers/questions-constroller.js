const Question = require("../models/question-model")

const getQestions = async (req, res) => {
    try{
    const question = await Question.find({userId:req.tokenData.id})
    console.log(question)
        if(question.length == 0){
            res.status(400).json({message:'У пользователя нет вопросов!'})
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
        const candidate = await Question.findOne({userId:req.tokenData.id, questionText:req.body.questionText})
        if(candidate){
            res.status(400).json({message:'Такой вопрос уже существует'})
        }
        const question = await Question.create({userId:req.tokenData.id, questionText:req.body.questionText,})

        question.save()
        res.status(200).json({message:'Вопрос пользователя создан'})
    }
    catch (e){
        res.status(400).send('Ошибка сервера ' + e)
    }
}
const deleteQuestion = async (req, res) => {
    try{

        const question = await Question.findOneAndDelete({userId:req.tokenData.id, _id:req.body.questionId,})

        if(!question){
            res.status(400).json({message:'Вопрос не найден'})
        }
        else{
            res.status(200).json({message:'Вопрос пользователя удалён'})
        }
        
    }
    catch (e){
        res.status(400).send('Ошибка сервера ' + e)
    }
}
module.exports= {getQestions, postQuestion, deleteQuestion}