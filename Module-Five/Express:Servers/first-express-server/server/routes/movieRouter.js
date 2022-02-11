const express = require('express')
const movieRouter = express.Router()
const Movie = require("../models/movie")


// Get All
movieRouter.get(`/`, (req, res, next) => {
    Movie.find((err, movies) => {
        if(err){
            res.status(500)
            return next (err)
        }
        res.status(200)
        res.send(movies)
    })
})

// Get One
movieRouter.get("/:movieId", (req, res, next)=>{
    const movieId = req.params.movieId
    const foundMovie = movies.find(movie => movie._id === movieId)
    if(foundMovie){
        const error = new Error(`The item was not found.`)
        res.status(500)
      return next(error)
    }
    res.status(200)
    res.send(foundMovie)
})


// Get by genre
movieRouter.get("/search/genre", (req, res, next) => {
   Movie.find({genre: req.query.genre}, (err, movies) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(movies)
   })
})

// Post One
movieRouter.post(`/`, (req, res, next) => {
    const newMovie = new Movie(req.body)
    newMovie.save((err, savedMovie) => {
        if(err){
            res.status(500)
            return next (err)
        }
        return res.status(201).send(savedMovie)
    })
})

movieRouter.delete("/:movieId", (req, res, next) => {
   Movie.findByIdAndDelete({_id: req.params.movieId}, (err, deletedItem) => {
    if(err){
        res.status(500)
        return next (err)
    }
   })
    res.status(200).send(`Successfuly deleted the movie!`)
})

movieRouter.put("/:movieId", (req, res, next) => {
    Movie.findByIdAndUpdate(
        {_id: req.params.movieId}, // find this one to update
        req.body, // update the object with this data
        {new: true}, // send back the updated version
        (err, updatedMovie) => {
            if(err){
                res.status(500)
                return next (err)
            }
            return res.status(201).send(updatedMovie)
        }
    )
})

module.exports = movieRouter