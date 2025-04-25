const jwt = require('jsonwebtoken')
const process = require('process')
const User = require('../models/user-model')
module.exports = async function (req, res, next)  {
    if(req.method === "OPTIONS"){
        next()
    }
    try{
        const token = req.headers.authorization.split(' ')[1]
        
        if(!token){
            return res.status(403).json({message:'Пользователь не авторизован'})
        }
        const decodedData =  jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.tokenData = decodedData
        
        next()
    }
    catch(e){
        res.status(403).json({message:'Пользователь не авторизован'})
    }
}