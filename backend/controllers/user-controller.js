const User = require('../models/user-model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const process = require('process')

const generateAccesToken = (id, name) => {
    const payload = {id, name}

    return jwt.sign(payload, process.env.JWT_SECRET_KEY, {expiresIn:'30d'})
}
const login = async(req, res) => {
    try{
    const {name, password} = req.body
    const candidate = await User.findOne({name})
    
    if(!candidate){
        res.status(400).json( {message:'Пользователя не существует '})
    }
    const validPassword = bcrypt.compareSync(password, candidate.password)
    if(!validPassword){
        res.status(400).json( {message:'Пароль не верный!'})
    }
    const token = generateAccesToken(candidate._id, candidate.name)
    return res.json({token: token})
    }
    catch(e){
        console.log(e)
        res.status(400).json({message: 'Ошибка регистрации '})
    }
}
const registration = async(req, res) =>{
    const {name, password} = req.body
    if(name === ' ' || password === ' '){
        res.status(400).json({message: 'Ошибка Все поля должны быть заполнены'})
    }
    try{
        const candidate = await User.findOne({name:name})
        
        if(candidate){
            return res.status(400).json({message:'Пользователь с таким данными уже существует '})
        }
        
        const hashpassword = bcrypt.hashSync(password, 8)
        await User.create({name:name, password:hashpassword})
        return res.status(200).json({message:'Успешно зарегестрирован'})
        
        
    }
    catch(e){
        console.log(e)
        res.status(400).json({message: 'Ошибка регистрации '})
    }
    
}
const getUserInfo = async (req, res) => {
    try{
        console.log('начал поиск по юзеру')
        
        const user = await User.findOne({_id:req.tokenData.id}).select("-password")
       
       
        res.json(user)
    }
    catch(e){
        console.log(e)
        
    }
}

const logout = async(req, res) => {
    
}

module.exports = {login, registration, logout, getUserInfo,}