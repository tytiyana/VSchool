
let greeting = "Hello"
let greetingEveryone = "Hello World"

function capilizeAndLowercase(){
    let lowerCase = greeting.toLowerCase()
    console.log(lowerCase)
    let upperCase = greeting.toUpperCase()
    console.log(upperCase)
    let lowerCaseSome = greeting.substring(0,4).toUpperCase() + greeting.substring(4,5).toLowerCase()
    console.log(lowerCaseSome)
    let upperCaseSome = greetingEveryone.substring(0,5).toUpperCase() + greetingEveryone.substring(5,11).toLowerCase()
    console.log(upperCaseSome)
    return("Done")
}
console.log(capilizeAndLowercase())



function findMiddleIndex(){
    let middleIndex = greeting.indexOf("l")
    console.log(middleIndex)
    console.log(Math.floor(middleIndex))
    return("Done")
}
console.log(findMiddleIndex())


function returnFirstHalf(){
    let firstHalf = greeting.slice(0,2)
    console.log(firstHalf)
    let backHalf = greetingEveryone.slice(0,5)
    console.log(backHalf)
    return("Done")
}
console.log(returnFirstHalf())
