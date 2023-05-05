const express = require("express")
const mineralRouter = express.Router()
const Mineral = require("../models/minerals")

mineralRouter.get("/", (req,res,next) => {
    Mineral.find((err, mineral) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(mineral)
    })
})

mineralRouter.get("/user", (req,res,next) => {
    Mineral.find({ user: req.auth._id }, (err, mineral) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(mineral)
    })
})

mineralRouter.post("/", (req,res,next) => {
    req.body.user = req.auth._id
    const newItem = new Mineral(req.body)
    newItem.save((err, savedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedItem)
    })
})

mineralRouter.delete("/:mineralId", (req,res,next) => {
    Mineral.findOneAndDelete({_id: req.params.mineralId, user: req.auth._id}, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Deleted`)
    })
})

mineralRouter.put("/:mineralId", (req,res,next) => {
    Mineral.findOneAndUpdate({_id: req.params.mineralId, user: req.auth._id}, 
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


module.exports = mineralRouter