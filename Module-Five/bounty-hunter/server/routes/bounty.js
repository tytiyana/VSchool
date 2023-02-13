const express = require(`express`)
const bountyRouter = express.Router()
const Bounty = require("../models/bounty")



bountyRouter.get("/", (req,res,next) => {
    Bounty.find((err, bounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounty)
    })
})

bountyRouter.post("/", (req,res,next) => {
    const newItem = new Bounty(req.body)
    newItem.save((err, savedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedItem)
    })
})

bountyRouter.delete("/:bountyId", (req,res,next) => {
    Bounty.findOneAndDelete({_id: req.params.bountyId}, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Deleted`)
    })
})

bountyRouter.put("/:bountyId", (req,res,next) => {
    Bounty.findOneAndUpdate({_id: req.params.bountyId}, 
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


module.exports = bountyRouter