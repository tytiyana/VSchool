//header
let newHeader = document.createElement ("h1")
newHeader.textContent = "JavaScript Made This!!"

let title = document.getElementById("header")
title.append(newHeader)

newHeader.style.textAlign = "center"

//subHeader
let subHeader = document.createElement ("span")
subHeader.textContent = "Tytiyana Brown"

let subTitle = document.getElementById("header")
subTitle.appendChild(subHeader)

subHeader.style.color = "peachpuff"

//subHeaderTwo
let subHeaderTwo = document.createElement ("span")
subHeaderTwo.textContent = " wrote the JavaScript."

let subTitleTwo = document.getElementById("header")
subTitleTwo.appendChild(subHeaderTwo)

//Change the convo
let leftTextMessage = document.getElementById ("message-left")
leftTextMessage.textContent = "Hello is this the Krusty Krab?"

let leftTextMessageTwo = document.getElementById ("message-left1")
leftTextMessageTwo.textContent = "No, this is Patrick"

let rightTextMessage = document.getElementById ("message-right")
rightTextMessage.textContent = "Ok, wrong number"

let rightTextMessageTwo = document.getElementById ("message-right2")
rightTextMessageTwo.textContent = "No problem, bye!"


//Clear text

let leftText = document.getElementById ("message-left")

let leftTextOne = document.getElementById ("message-left1")

let rightText = document.getElementById ("message-right")

let rightTextTwo = document.getElementById ("message-right2")


let clearText = document.getElementById("clear-button")

clearText.addEventListener("click", function () {
    leftText.textContent = ""
})

clearText.addEventListener("click", function () {
    rightText.textContent = ""
})

clearText.addEventListener("click", function () {
    leftTextOne.textContent = ""
})

clearText.addEventListener("click", function () {
    rightTextTwo.textContent = ""
})


//Change the theme
 let dropDown = document.getElementById("theme-drop-down")
 let optionOne  = document.getElementById("option-one")
 let optionTwo = document.getElementById("option-two")

 let brownOne = document.getElementById ("message-left")
 let brownTwo = document.getElementById ("message-left1")
 let blueOne = document.getElementById ("message-right")
 let blueTwo = document.getElementById ("message-right2")

dropDown.addEventListener("change",function(){
        brownOne.style.backgroundColor = "red"
        brownTwo.style.backgroundColor = "red"
        blueOne.style.backgroundColor = "black"
        blueTwo.style.backgroundColor = "black"
        blueOne.style.color = "white"
        blueTwo.style.color = "white" 
 }
)

//Add more messages 
let inputValue = document.getElementById("input")


//Couldn't figure out how to make it change for a certian option & don't know how to make more bubbles when text is submitted


