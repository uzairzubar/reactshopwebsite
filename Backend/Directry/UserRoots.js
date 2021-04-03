const express = require('express')
const router = express.Router()
const user = require('../Models/user')

router.get('/', (request, response) => {
    //select form user
    user.find((error,docs) => {
        if(!error)
            response.send(docs)
        else
            console.log("data not fined: " + JSON.stringify(error))
    })
})

router.post('/login', (request, response) => {
    const userData = {
        email: request.body.email,
        password: request.body.password
    }

    //select from where email and password
    user.findOne(userData, (error, docs) => {
        if (!error){
            if(docs)
                response.send(docs)
            else
                response.send("wrong Email / Password")
        }

        else
            console.log("data not fined: " + JSON.stringify(error))
    })
})


router.post('/saveUser', (request, response) => {

    const userData = new user({
        name: request.body.name,
        email: request.body.email,
        phone: request.body.phone,
        password: request.body.password
    })

    userData.save()
        .then(data => response.send(data))
        .catch(error => console.log("data not saved:" + JSON.stringify(error)))
})

module.exports = router