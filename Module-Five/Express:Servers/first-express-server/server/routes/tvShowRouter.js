const express = require('express')
const tvShowRouter = express.Router()
const {v4:  uuid} = require("uuid")

const tvShows = [
    {title: "Rick and Morty", _id: uuid()},
    {title: "Watchmen", _id: uuid()},
    {title: "Westworld", _id: uuid()},
    {title: "Friends", _id: uuid()}
]

tvShowRouter.get("/", (req, res)=> {
    res.send(tvShows)
})

tvShowRouter.get("/:movieId", (req, res)=>{
    const tvShowId = req.params.tvShowId
    const foundtvSHow = tvShows.find(tvShow => tvShow._id === tvShowId)
    res.send(foundtvSHow)
})

tvShowRouter.get("/search/genre", (req, res) => {
    const genre = req.query.genre
    const filteredShows = shows.filter(show => show.genre === genre )
    res.send(filteredShows)
})

tvShowRouter.post("/", (req, res) => {
    const newShow = req.body
    newShow._id = uuid()
    tvShows.push(newShow)
    res.send(`Successfully added ${newShow.title} to the database!`)
})

module.exports = tvShowRouter