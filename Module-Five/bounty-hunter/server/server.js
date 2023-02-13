const express = require(`express`)
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/crud-store',
    {
        
    }, 
    () => console.log(`Connected to database!`)
)

app.use("/bounty", require("./routes/bounty"))

app.use((err,req,res,next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(8000, () => {
    console.log(`The server is runnning on Port 8000`)
})







/* app.get(`/bounty`, (req,res) => {
    res.send(bounties)
})

app.post(`/bounty`, (req,res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(newBounty)
})

app.put(`/bounty/:bountyId`, (req,res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
    res.send(updatedBounty)
})

app.delete(`/bounty/:bountyId`, (req,res) => {
     const bountyId = req.params.bountyId
     const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
     bounties.splice(bountyIndex, 1)
     res.send(`Successfully deleted bounty!`)
})
*/

