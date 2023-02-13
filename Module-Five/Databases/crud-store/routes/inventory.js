const express = require('express')
const inventory = require('../models/inventory')
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory')



inventoryRouter.get("/", (req,res,next) => {
    Inventory.find((err, inventory) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(inventory)
    })
})

inventoryRouter.post("/", (req,res,next) => {
    const newItem = new Inventory(req.body)
    newItem.save((err, savedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedItem)
    })
})

inventoryRouter.delete("/:inventoryId", (req,res,next) => {
    inventory.findOneAndDelete({_id: req.params.inventoryId}, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Deleted`)
    })
})

inventoryRouter.put("/:inventoryId", (req,res,next) => {
    Inventory.findOneAndUpdate({_id: req.params.inventoryId}, 
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


module.exports = inventoryRouter