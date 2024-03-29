const express = require("express")
const gemstoneRouter = express.Router()
const Gemstone = require("../models/gemstones")

gemstoneRouter.get("/", (req,res,next) => {
    Gemstone.find((err, gemstone) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(gemstone)
    })
})

gemstoneRouter.get("/user", (req,res,next) => {
    Gemstone.find({ user: req.auth._id },(err, gemstone) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(gemstone)
    })
})

gemstoneRouter.post("/", (req,res,next) => {
    req.body.user = req.auth._id
    const newItem = new Gemstone(req.body)
    newItem.save((err, savedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedItem)
    })
})

gemstoneRouter.delete("/:gemstoneId", (req,res,next) => {
    Gemstone.findOneAndDelete({_id: req.params.gemstoneId, user: req.auth._id}, 
        (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)

        }
        return res.status(200).send(`Deleted`)
    })
})

gemstoneRouter.put("/:gemstoneId", (req,res,next) => {
   Gemstone.findOneAndUpdate({_id: req.params.gemstoneId, user: req.auth._id}, 
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


module.exports = gemstoneRouter