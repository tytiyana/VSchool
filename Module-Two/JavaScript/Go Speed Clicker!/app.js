const button = document.getElementById("click-me")
const counter = document.getElementById("counter")
let count = 0

button.addEventListener("click" ,function clickMe(e){
    e.preventDefault()
    counter.innerText = count++  
    const data =   sessionStorage.setItem("number", count)
    const getData = sessionStorage.getItem("number")
    }
)

if (sessionStorage.getItem("number")) {
    // Restore the contents of the text field
    counter.innerText = sessionStorage.getItem("number");
  }

