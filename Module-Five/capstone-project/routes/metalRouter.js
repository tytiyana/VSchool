const express = require("express")
const metalRouter = express.Router()
const Metal = require("../models/metals")

metalRouter.get("/", (req,res,next) => {
    Metal.find((err, metal) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(metal)
    })
})

metalRouter.get("/user", (req,res,next) => {
    Metal.find({ user: req.auth._id }, (err, metal) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(metal)
    })
})


metalRouter.post("/", (req,res,next) => {
    req.body.user = req.auth._id
    const newItem = new Metal(req.body)
    newItem.save((err, savedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedItem)
    })
})

metalRouter.delete("/:metalId", (req,res,next) => {
    Metal.findOneAndDelete({_id: req.params.metalId, user: req.auth._id}, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Deleted`)
    })
})

metalRouter.put("/:metalId", (req,res,next) => {
    Metal.findOneAndUpdate({_id: req.params.metalId, user: req.auth._id}, 
        req.body, 
        {new: true}, 
        (err, updatedItem) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedItem)
        })
})


module.exports = metalRouter