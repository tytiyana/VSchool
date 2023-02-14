const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect("mongodb://localhost:27017/elements", () => console.log('Connected to Database'))

app.use('/minerals', require("./routes/mineralRouter"))
app.use('/gemstones', require("./routes/gemstoneRouter"))
app.use('/metals', require("./routes/metalRouter"))


app.use((err,req,res,next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(8000, () => {
    console.log(`The server is listening on Port 8000`)
})