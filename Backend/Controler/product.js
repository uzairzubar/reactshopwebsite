const objectID = require('mongoose').Types.ObjectId
const addNewProduct = require('../Models/Product')


const getProducts = (request,response) => {
    addNewProduct.find((error,document) => {
        if (!error) {
            response.send(document)
        } else {
            console.log("data not found" + JSON.stringify(error))
        }
    })
};
const SingleProducts =(request,response) => {
    if (!objectID.isValid(request.params.id)){
        return response.status(400).send("InValid ID" + request.params.id)
    }
    addNewProduct.findById(request.params.id, (error,document) => {
        if(!error){
            response.send(document)
        }
        else {
            console.log("data not found" + JSON.stringify(error))
        }
    })
};
const SaveProducts =(request,response) => {
    const insertData = new addNewProduct({
        name: request.body.name,
        price: request.body.price,
        category: request.body.category,
        image: request.body.image,
    })
    insertData.save((error,document) =>{
        if(!error){
            response.send(document)
        }
        else {
            console.log("data not saved" + JSON.stringify(error))
        }
    })
};




const editProducts = (request,response) => {
    if (!objectID.isValid(request.params.id)){
        return response.status(400).send("InValid ID" + request.params.id)
    }
    const updateData = {
        name: request.body.name,
        price: request.body.price,
        category: request.body.category,
        image: request.body.image,
    }
    addNewProduct.findByIdAndUpdate(request.params.id,
        {$set:updateData},
        {new:true},
        (error,document) => {
            if(!error){
                response.send(document)
            }
            else {
                console.log("data not found" + JSON.stringify(error))
            }
        })
};
const deleteProducts =(request,response) => {
    if (!objectID.isValid(request.params.id)){
        return response.status(400).send("InValid ID" + request.params.id)
    }
    addNewProduct.findByIdAndRemove(request.params.id,
        (error,document) => {
            if (!error){
                response.send(document)
            }
            else {
                console.log("data not deleted" + JSON.stringify(error))
            }
        })
};
module.exports = {getProducts,SingleProducts,editProducts,deleteProducts,SaveProducts}