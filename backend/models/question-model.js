const moongose = require('mongoose')


const questionSchema = new moongose.Schema({
    userId:{type:moongose.Schema.Types.ObjectId, ref:'User',},
    questionText :String,
    createAt:{type:String, default: new Date().toLocaleDateString()}
})

const Question = moongose.model('Question', questionSchema)

module.exports = Question