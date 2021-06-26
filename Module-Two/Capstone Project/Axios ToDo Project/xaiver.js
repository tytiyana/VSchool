const getInfo = () => {
    axios.get("https://api.vschool.io/xavierb/todo")
        .then(response => {
            console.log(`the GET request happened`)
            applyToDom(response.data)
        })
        .catch(error => console.log(error))
}
getInfo()
const form = document.form
form.addEventListener("reset", () => {
    getInfo()
    const newEntry = {
        title: form.first.value,
        description: form.second.value,
        imgUrl: form.querySelector("input[name='third']").value
    }
    axios.post("https://api.vschool.io/xavierb/todo", newEntry)
        .then(response => {
            console.log("this is the POST")
            getInfo()
        })
        .catch(error => console.log(error))
    applyToDom(newEntry)
})
const applyToDom = (data) => {
    const clearPage = () => {
        const removeList = document.querySelector("#display")
        while (removeList.firstChild) {
            removeList.removeChild(removeList.firstChild)
        }
    }
    clearPage()
    for (let i = 0; i < data.length; i++) {
        let listItem = document.createElement("li")
        listItem.className = "className"
        listItem.innerText = `${data[i].title} ${data[i].description} ${data[i].imgUrl}`
        document.querySelector("#display").appendChild(listItem)
        let checkbox = document.createElement("input")
        checkbox.setAttribute("type", "checkbox")
        listItem.appendChild(checkbox)
        const picture = document.createElement("img")
        picture.setAttribute("src", data[i].imgUrl)
        listItem.appendChild(picture)
        
        checkbox.addEventListener("change", () => {
            const postObj = { completed: true }
            axios.put("https://api.vschool.io/xavierb/todo/" + data[i]._id, postObj)
                .then(response => {
                    getInfo()
                    console.log(response)
                })
                .catch(error => console.log(error))
        })
        if (data[i].completed === true) {
            listItem.style.textDecoration = "line-through"
            checkbox.checked === true
        }
        const deleteButton = document.createElement('button')
        deleteButton.innerText = "Delete"
        listItem.appendChild(deleteButton)
        deleteButton.addEventListener("click", () => {
            axios.delete("https://api.vschool.io/xavierb/todo/" + data[i]._id)
                .then(response => {
                    console.log("the delete happened")
                    getInfo()
                })
                .catch(err => console.log(err))
        })
    }
}
// CRUD know 
// array methods and what they return  and if they make any changes to the org array 
// local and session storage 
// forms - what methods will stop the screen from reloading 
// how can you use the name attube to get elemts instead of doing the full document