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

mineralRouter.post("/", (req,res,next) => {
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
    Mineral.findOneAndDelete({_id: req.params.mineralId}, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Deleted`)
    })
})

mineralRouter.put("/:mineralId", (req,res,next) => {
    Mineral.findOneAndUpdate({_id: req.params.mineralId}, 
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