// GET - grabs the information //
function getTodos(){
    axios.get(`https://api.vschool.io/tytiyana/todo`)
        .then(response => listTodos(response.data))
        .catch(err => console.log(err))
}

// Displays all the to-dos //
function listTodos(data) {
    for (let i = 0; i < data.length; i++) {
        const list = document.getElementById(`todo-list`)
        const h1 = document.createElement(`h1`)
        h1.textContent = data[i].title

        const checkbox = document.createElement("input")
        checkbox.type = `checkbox`
        checkbox.className = `checkbox`
        checkbox.checked = data[i].completed

        checkbox.addEventListener()

        const editButton = document.createElement(`button`)
        editButton.textContent = `Edit`
        editButton.setAttribute(`id`, `edit`)

        const deleteButton = document.createElement(`button`)
        deleteButton.textContent = `delete`
        deleteButton.setAttribute(`id`, `delete`)

        const spanOne = document.createElement(`span`)
        spanOne.textContent = `${data[i].description} `

        const spanTwo = document.createElement(`span`)
        spanTwo.textContent = `${data[i].price} `

        list.appendChild(h1)
        list.appendChild(checkbox)
        list.appendChild(editButton)
        list.appendChild(deleteButton)
        list.appendChild(spanOne)
        list.appendChild(spanTwo)

    }
}

// Calls the function //
getTodos()

// Grabbing the items needed from the document. //
const title = document.getElementById(`title`)
const description = document.getElementById(`description`)
const price = document.getElementById(`price`)
const imgUrl = document.getElementById(`img-url`)
const submitButton = document.getElementById(`submit`)

// POST - adds new items to the do list. //
submitButton.addEventListener(`click`, function(e) { 
    e.preventDefault()

    const newTodo = {
        title: title.value ,
        price: price.value ,
        description: description.value ,
        imgUrl: imgUrl.value
    }

    axios.post(`https://api.vschool.io/tytiyana/todo`, newTodo)
            .then(response => getTodos())
            .catch(error => console.log(error))
    }
)
 
// PUT - updates the item to completed or edits the item //






  

//  DELETE - self- explanantory //
