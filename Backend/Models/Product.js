const mongoose = require('mongoose')
const ProductTable = new mongoose.Schema({
    name: {type:String},
    price: {type:Number},
    category: {type:String},
    image: {type:String},
    date: {type:Date,default: Date.now()},
})
module.exports= mongoose.model('Product',ProductTable)