const express = require("express")
const app = express()
require('dotenv').config()
const morgan = require("morgan")
const mongoose = require("mongoose")
const { expressjwt } = require('express-jwt')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect("mongodb://localhost:27017/elements", () => console.log('Connected to Database'))

app.use('/auth', require('./routes/authRouter'))
app.use('/api', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256']}))
app.use('/api/minerals', require("./routes/mineralRouter"))
app.use('/api/gemstones', require("./routes/gemstoneRouter"))
app.use('/api/metals', require("./routes/metalRouter"))


app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
      res.status(err.status)
    }
    return res.send({errMsg: err.message})
  })
  

app.listen(8000, () => {
    console.log(`The server is listening on Port 8000`)
})