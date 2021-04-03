const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotEnv = require('dotenv')
const cors = require('cors')
const bodyParser =require('body-parser')

const ProductRoutes = require('./Directry/ProductRoutes')
const UserRoutes = require('./Directry/UserRoots')


dotEnv.config()
mongoose.connect(
    process.env.DATABASE_CODE,
    {useNewUrlParser: true, useUnifiedTopology: true},
    error => {
        if (!error)
            console.log("database is working")
        else
            console.log("database is not Connected: " + JSON.stringify(error))
    }
)
app.use(bodyParser.json({limit:"20mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"20mb",extended:true}))
app.use(express.json())
app.use(cors())
app.use('/product',ProductRoutes)
app.use('/user',UserRoutes)
app.listen(4000,console.log("server is working"))


