// import {getProducts} from "../Controler/Product";

const express = require('express')
const ProductRouter = express.Router()

const {getProducts,SingleProducts,SaveProducts,editProducts,deleteProducts}
    = require('../Controler/Product')


ProductRouter.get('/getProduct',getProducts)
//show all record
ProductRouter.get('/:id',SingleProducts)

//show single record for specfic product by Id

ProductRouter.post('/addProduct',SaveProducts)

//update product by id
ProductRouter.put('/:id/edit',editProducts)

//delete product by id

ProductRouter.delete('/:id',deleteProducts)


module.exports = ProductRouter