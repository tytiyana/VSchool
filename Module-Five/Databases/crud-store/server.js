const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan("dev"))

mongoose.connect('mongodb://localhost:27017/crud-store',
    {
        
    }, 
    () => console.log(`Connected to database!`)
)

app.use("/inventory", require("./routes/inventory"))

app.use((err,req,res,next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(8000, () => {
    console.log(`The server is running on server 8000`)
})