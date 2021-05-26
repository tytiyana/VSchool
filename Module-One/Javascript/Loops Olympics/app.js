const numbers = [0,1,2,3,4,5,6,7,8,9,]

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

for (let i = 9; i >= 0; i--) {
    console.log(numbers[i])
    
}

const basicFruits = ["banana", "orange", "apple", "kiwi"]

for (let i = 0; i < basicFruits.length; i++) {
    console.log(basicFruits[i])
    
}

const numbersList = "0,1,2,3,4,5,6,7,8,9"
const numbersArray = numbersList.split(" ")
console.log (numbersArray)

for (let i = 0; i <= 100; i++) {
   console.log([i])
    
}

const fruitList = ["banana", "orange", "apple", "kiwi", "pear", "peach"]


let fruits1 = fruitList.splice(1,1)
let fruits2 = fruitList.splice(2,1)
let fruits3 = fruitList.splice(3,1)
let fruits = fruits1.concat(fruits2,fruits3)
console.log(fruits)    
  
const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  
const peopleNames = []
const peopleOcc = []

for (let i = 0; i < peopleArray.length; i++) {
    const people = peopleArray[i]
    console.log(people.name)
}



