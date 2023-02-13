const express = require(`express`)
const app = express()
const uuid = require(`uuid`)

app.use(express.json())


const toDos = [
    {
        name: `Go get food`,
        description: `DoorDash`,
        imageUrl: `none`,
        completed:`false`,
        _id: uuid.v4()
    },
    {
        name: `Make doctors appt`,
        description: `Dr. Rose`,
        imageUrl: `none`,
        completed:`false`,
        _id: uuid.v4()
    }
]

app.get(`/todos`, (req,res) => {
    res.send(toDos)
})

app.get(`/todos/:todoId`, (req,res) => {
    const todoId = req.params.todoId
    const todoById = toDos.find(item => item._id === todoId)
    res.send(todoById)
})

app.post(`/todos`, (req,res) => {
    const newTodo = req.body
    newTodo._id =uuid.v4()
    toDos.push(newTodo)
    res.send(`${newTodo.name} has been added.`)
})

app.put(`/todos/:todoId`, (req,res) => {
    const todoId = req.params.todoId
    const updatedTodo = req.body
    const toDoIndex = toDos.findIndex(item => item._id === todoId)
    const newTodo = Object.assign(toDos[toDoIndex],updatedTodo)
    res.send(newTodo)
})

app.delete(`/todos/:todoId`, (req,res) => {
    const todoId = req.params.todoId
    const toDoIndex = toDos.findIndex(item => item._id === todoId)
    toDos.splice(toDoIndex,1)
    res.send(`Successfully deleted!`)
})

app.listen(8000, () => {
    console.log(`The server is running on Port 8000`)
})

// create a get one, get all, post, put, delete
