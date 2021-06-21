const name = "John"
let age = 101

function runForLoop(pets) {
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])

/* ^ let and const
Replace all the vars with let and const. Alter the code however necessary to make sure this continues to work (so the pet's name isn't "John", but instead "spot" is returned). You only need to delete var and insert let and const

John is the pet owner, and his name should be stored differently than the other names. */


const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(carrot => {return {type: "carrot", name: carrot }})
}

console.log(mapVegetables(carrots))

/* ^ Re-write this .map() using an arrow function:

Be aware that if JavaScript sees a { directly after the => it will think it's starting a function, and not starting an object, so the : will be an unexpected symbol. */


const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(person => {return person.friendly})
}

console.log(filterForFriendly(people))
/* ^ Re-write this .filter() using an arrow function. */

const doMathSum = (a, b) => a + b;
const produceProduct = (a, b) => a * b

console.log(doMathSum(3,6),produceProduct(6,7))

/* ^ Re-write the following functions to be arrow functions. */

const printString = (firstName, lastName, age) => `Hi, ${firstName} ${lastName}, how does it feel to be ${age}?`

console.log(printString(`Tony`,`Stark`,56))

/* ^ Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following.
Extra Credit - Use template literals to build the string. */


const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 function filterForDogs(arr) {
    return arr.filter(animal => (animal.type === "dog") ? true :  false)
}

 console.log(filterForDogs(animals))

 /* Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it. */

 const travel = (location, name) => `Hi, ${name}! \nWelcome to ${location}.\nI hope you enjoy your stay. Please ask the president of ${location} if you need anything.`

 console.log(travel(`Jamaica`, `Helene`))

 /* Template Literals
Using template literals, write a function that takes location and name parameters and outputs a message formatted like this */