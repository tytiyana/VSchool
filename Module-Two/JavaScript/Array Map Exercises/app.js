const numbers = [2,5,100]
const doubleIt = numbers.map(numbers => numbers * 2)
console.log(doubleIt)
// Make an array of numbers that are doubles of the first array.

const stringMeAlong = numbers.map(numbers => `${numbers}`)
console.log(stringMeAlong)
// Take an array of numbers and make them strings.

const names = ["john", "JACOB", "jinGleHeimer", "schmidt"]
const capitalizeMe = names.map(names => names.charAt(0).toUpperCase() + names.slice(1).toLowerCase() )
console.log(capitalizeMe)
// Capitalize each of an array of names.

const namesAges = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]
const pullMeOut = namesAges.map(namesAges => namesAges.name)
console.log(pullMeOut)
// Make an array of strings of the names.

const yesOrNo = namesAges.map((namesAges) => {
    if(namesAges.age <= 18 ){
    return(`${namesAges.name} is under age!!` )
    } else {
        return(`${namesAges.name} can go to The Matrix`)
    }
})
console.log(yesOrNo)
// Make an array of strings of the names saying whether or not they can go to The Matrix.

const readyForTheDOM = namesAges.map(namesAges => `<h1>${namesAges.name}</h1><h2>${namesAges.age}</h2>`)
console.log(readyForTheDOM)
// Make an array of the names in h1s, and the ages in h2s
