const additionOne = document.getElementById("add1")
const additionTwo = document.getElementById("add2")
const addButton = document.getElementById("add")
const sum1 = document.getElementById("sum1")

addButton.addEventListener("click", function (e) {
    e.preventDefault()
    const sumText = parseInt(additionOne.value) + parseInt(additionTwo.value)
    sum1.textContent = sumText
    }
)

const subtract1 = document.getElementById("sub1")
const subtract2 = document.getElementById("sub2")
const subtractButton = document.getElementById("subtract")
const sum2 = document.getElementById("sum2")

subtractButton.addEventListener("click", function(e){
    e.preventDefault()
    const sum2text = subtract1.value - subtract2.value
    sum2.textContent = sum2text
    }
)

const multiply1 = document.getElementById("mul1")
const multiply2 = document.getElementById("mul2")
const multiplyButton = document.getElementById("multiply")
const product = document.getElementById("product")

multiplyButton.addEventListener("click", function(e){
    e.preventDefault()
    const productText = multiply1.value * multiply2.value
    product.textContent = productText
    }
)