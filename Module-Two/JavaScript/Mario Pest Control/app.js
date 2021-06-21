const submitOrder = document.getElementById("submit")
const finalOrderTotal = document.getElementById("final-price")

const gInput = document.getElementById("goombas")
const bInput = document.getElementById("bob-ombs")
const cInput = document.getElementById("cheep-cheeps")

submitOrder.addEventListener("click", function(e){
e.preventDefault()
finalOrderTotal.textContent = `Your total today comes to $${parseInt(gInput.value * 5) + parseInt(bInput.value * 7) + parseInt(cInput.value* 11 )} dollars.`
    }
)
