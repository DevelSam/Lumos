const LikesFilms = require('../models/likesFilms-model')

const addFilmLike = async (req, res) => {
    try{
        console.log('есть контакт')
        console.log(req.body)
        console.log(req.method)
        console.log(req.tokenData.id)
        const candidate =  await LikesFilms.findOne({userId:req.tokenData.id, filmId:req.body.filmId})
        console.log(candidate)
        if(candidate){
            await LikesFilms.updateOne({userId:req.tokenData.id, filmId:req.body.filmId}, {$set:{filmLike:req.body.filmLike}})
            res.status(200).json({message:'фильм обновлён '})
        }
        else{
        const LikesFilm = LikesFilms.create({userId:req.tokenData.id, filmId:req.body.filmId ,filmLike:req.body.filmLike})
        
        console.log(LikesFilm, req.body)
        res.status(200).json({message:'Любимый фильм сохранён'})
        }
    }
    catch(e){
        console.log(e)    
    }
}
const changeLikeFilm = async (req, res) => {
    try{
        const LikesFilm = await LikesFilms.updateOne({userId:req.tokenData.id, filmId:req.body.filmId}, {$set:{filmLike:req.body.filmLike}})
        if(!LikesFilm){
            res.status(400).json({message:'Ошибка не найден фильм '})
        }
        
        else{

            res.status(200).send('Обновлено состояние для фильма')
        }


    }
    catch(e){
        console.log(e)
    }
}
const checkFilmLike = async (req , res) => {
    try{
        const LikesFilm = await LikesFilms.find({userId:req.tokenData.id})
        console.log(LikesFilm)
        if(!LikesFilm ){
            return res.status(400).json({message:'У пользователя нету любимых фильмов '})
        }
        else{
            
            return res.json(LikesFilm)
        }
        
    }
    catch(e){
        console.log(e)
    }
}
const removeFilmLike = async(req, res) => {
    try{
        const LikesFilm = await LikesFilms.findOneAndDelete({userId:req.tokenData.id, filmId:req.body.filmId})
        if(!LikesFilm){
            return res.status(400).json({message:'Не найден фильм у пользователя'})
        }
        else{
            res.status(200).json({message:'Фильм успешно удалён'})
        }
    }
    catch(e){
        console.log(e)
    }
}
module.exports = {checkFilmLike, addFilmLike, changeLikeFilm, removeFilmLike}