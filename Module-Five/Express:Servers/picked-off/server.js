const express = require(`express`)
const app = express()
const uuid = require(`uuid`)
const middleware = require(`./dessertMiddleware`)

app.use(express.json())

app.use(middleware.middleware)


const desserts = [
    {name: `cheesecake`, type: `cake`},
    {name: `pumpkin pie`, type: `pie`}
]


app.get(`/desserts`, (req,res) => {
    res.send(desserts)
})


app.listen(8000, () => {
    console.log(`Server is running on Port 8000`)
})