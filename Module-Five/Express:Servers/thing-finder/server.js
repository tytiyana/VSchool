const express = require(`express`)
const app = express()
const {v4: uuidv4} = require('uuid')

app.use(express.json())

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
    },{
        name: "basketball",
        type: "toy",
        price: 1000,
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
    },{
        name: "soup",
        type: "food",
        price: 300,
    },{
        name: "flour",
        type: "food",
        price: 100,
    }
]

app.get(`/inventory`,(req,res) => {
    res.send(inventoryItems)
})

app.get(`/:itemName`, (req,res) => {
    const itemName = req.params.itemName
    const foundItem = inventoryItems.find(item => item.name === itemName)
    res.send(foundItem)
})

app.get(`/search/type`, (req,res) => {
    const type = req.query.type
    const foundItems = inventoryItems.filter(item => item.type === type)
    res.send(foundItems)
})

app.listen(8000, () => {
    console.log(`The server is running on Port 8000`)
})