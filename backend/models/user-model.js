    const moongose = require('mongoose')

    const UserSchema = new moongose.Schema({
        name:String,
        password:String,
        
    })

    const User = moongose.model('User', UserSchema)
    module.exports= User