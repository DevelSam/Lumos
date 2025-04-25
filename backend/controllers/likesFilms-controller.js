const LikesFilms = require('../models/likesFilms-model')

const addFilmLike = async (req, res) => {
    try{
        const LikesFilm = LikesFilms.create({userId:req.tokenData.id, filmId:req.body.filmId ,filmLike:req.body.filmLike})
        
        console.log(LikesFilm, req.body)
        res.status(200).json({message:'Любимый фильм сохранён'})
    }
    catch(e){
        onsole.log(e)    
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
            res.status(400).json({message:'У пользователя нету любимых фильмов '})
        }
        else{
            res.json(LikesFilm)
        }
        
    }
    catch(e){
        console.log(e)
    }
}
module.exports = {checkFilmLike, addFilmLike, changeLikeFilm}