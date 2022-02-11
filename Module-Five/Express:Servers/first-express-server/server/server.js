// ! First Express Server ! //

const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

// Middleware 
app.use(express.json())
app.use(morgan('dev'))

// Connect to DB
mongoose.connect('mongodb://localhost:27017/moviesdb',() => console.log("Connected to the database."))

//Routes
app.use("/movies", require("./routes/movieRouter"))
app.use("/tvShows", require("./routes/tvShowRouter"))

// Error Handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

// Listener
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
}) 