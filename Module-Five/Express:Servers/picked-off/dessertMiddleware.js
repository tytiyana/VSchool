const express = require(`express`)
const app = express()

app.use(express.json())

 const middleware = app.use(`/`, (req,res,next) => {
    console.log(`Yummy, desserts!`)
    next()
})


module.exports = {middleware}

