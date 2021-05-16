const readline = require("readline-sync")

const firstNumber = readline.question("Please enter your first number: ");
console.log("Okay!");

const secondNumber = readline.question("Please enter your second number: ");
console.log("Okay!");

const operationRequest = readline.question("Please enter the operation to perform: ");



function addition(firstNumber,secondNumber) {
    return parseInt(firstNumber) + parseInt(secondNumber)
}
if(operationRequest === "add"){let add = addition (firstNumber,secondNumber)
console.log (add)}



function subtraction (firstNumber,secondNumber) {
    return (firstNumber-secondNumber)
}
if(operationRequest === "subtract"){let subtract = subtraction (firstNumber,secondNumber)
console.log (subtract)}



function multiplication (firstNumber,secondNumber) {
    return (firstNumber*secondNumber)
}
if(operationRequest === "multiply"){
    let multiply = multiplication (firstNumber,secondNumber)
console.log (multiply)}



function division (firstNumber,secondNumber) {
    return (firstNumber/secondNumber)
}
if(operationRequest === "divide") {
    let divide = division (firstNumber,secondNumber)
console.log (divide)
}