// * GET - grabs the information * //
function getTodos(){
    axios.get(`https://api.vschool.io/tytiyana/todo`)
        .then(response => listTodos(response.data))
        .catch(err => console.log(err))
}

// * Displays all the to-dos * //
function listTodos(data) {
    clearList()
    for (let i = 0; i < data.length; i++) {
        const list = document.getElementById(`todo-list`)
        const h1 = document.createElement(`h1`)
        h1.textContent = data[i].title

        const checkbox = document.createElement(`input`)
        checkbox.type = `checkbox`
        checkbox.className = `checkbox`      

        checkbox.addEventListener(`change`, function(){
            if (checkbox.checked === true){
                h1.style.textDecoration = "line-through"
                axios.put(`https://api.vschool.io/tytiyana/todo/${data[i]._id}`, {completed: true})
                .then(response => response.data)
                .catch(error => console.log(error))        
            } else {
                checkbox.checked === false 
                axios.put(`https://api.vschool.io/tytiyana/todo/${data[i]._id}`, {completed: false})
                .then(response => response.data)
                .catch(error => console.log(error))        
            }
        })

        const editButton = document.createElement(`button`)
        editButton.textContent = `Edit`
        editButton.setAttribute(`class`, `edit`)

        const titleTwo = document.createElement(`input`)
        titleTwo.placeholder = `title`
        const descriptionTwo = document.createElement(`input`)
        descriptionTwo.placeholder = `description`
        const priceTwo = document.createElement(`input`)
        priceTwo.placeholder = `price`
        const imgUrlTwo = document.createElement(`input`)
        imgUrlTwo.placeholder = `imgUrl`
        const submitEdit = document.createElement(`button`)
        submitEdit.textContent = `Submit`
        submitEdit.setAttribute(`id`, `submitEdit`)

        editButton.addEventListener(`click`, function (){
            divTwo.appendChild(titleTwo)
            divTwo.appendChild(descriptionTwo)
            divTwo.appendChild(priceTwo)
            divTwo.appendChild(imgUrlTwo)
            divTwo.appendChild(submitEdit)    
    }
)           

        submitEdit.addEventListener(`click`, function (){
            const newTodoTwo = {
            title: titleTwo.value,
            price: priceTwo.value,
            description: descriptionTwo.value,
            imgUrl: imgUrlTwo.value
            }

            axios.put(`https://api.vschool.io/tytiyana/todo/${data[i]._id}`, newTodoTwo)
            .then(response =>  getTodos())
            .catch(error => console.log(error))  
            }
        )
        const deleteButton = document.createElement(`button`)
        deleteButton.textContent = `delete`
        deleteButton.setAttribute(`class`, `delete`)

        deleteButton.addEventListener("click", function deleteItem(){
            axios.delete(`https://api.vschool.io/tytiyana/todo/${data[i]._id}`)
               .then(response => {
                   console.log(`Your Item was deleted`)
                   getTodos()
            })
               .catch(error => console.log(error))
           } )

        const spanOne = document.createElement(`span`)
        spanOne.textContent = `${data[i].description} `

        const spanTwo = document.createElement(`span`)
        spanTwo.textContent = `${data[i].price} `
        
        const divTwo = document.createElement(`div`)
        list.appendChild(h1)
        list.appendChild(checkbox)
        list.appendChild(editButton)
        list.appendChild(deleteButton)
        list.appendChild(spanOne)
        list.appendChild(spanTwo)
        list.appendChild(divTwo)

    }

}

// * Calls the function * //
getTodos()

// Grabbing the items needed from the document. //
const title = document.getElementById(`title`)
const description = document.getElementById(`description`)
const price = document.getElementById(`price`)
const imgUrl = document.getElementById(`img-url`)
const submitButton = document.getElementById(`submit`)

// * POST - adds new items to the do list * //
submitButton.addEventListener(`click`, function(e) { 
    e.preventDefault()

    const newTodo = {
        title: title.value,
        price: price.value,
        description: description.value,
        imgUrl: imgUrl.value
    }

    axios.post(`https://api.vschool.io/tytiyana/todo`, newTodo)
            .then(response => getTodos())
            .catch(error => console.log(error))
    }
)


// * Clear list //
function clearList() {
    const clearIt = document.getElementById(`todo-list`)
    while (clearIt.firstChild) {
        clearIt.removeChild(clearIt.firstChild)
    }
}










