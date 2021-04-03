const mongoose = require('mongoose')
const UserTable = new mongoose.Schema({
    name: {type:String},
    email: {type:String},
    phone: {type:Number},
    image: {type:String},
    date: {type:Date,default: Date.now()},
})
module.exports= mongoose.model('user',UserTable)