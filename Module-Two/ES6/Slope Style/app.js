function collectAnimals(...animals) {  
    return animals
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))
 
// ^ Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it.

function combineFruit(fruit, sweets, vegetables){
    return {fruit,sweets,vegetables}
}

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]))

// ^ Write a function that returns a food object with the array names as properties. You'll use an ES6 shorthand syntax that becomes useful when a variable name is mentioned twice in both the name and value of properties in your object.   
    const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
    };

    const {location, duration} = vacation
  
  function parseSentence({location, duration}){
    return `We're going to have a good time in ${location} for ${duration}`
  }
  console.log(parseSentence(vacation))


// ^ Use destructuring to use the property names as variables. Desructure the object in the parameter.

function returnFirst(items){
    const [firstItem , secondItem , thirdItem] = items;
    return firstItem
}

// ^ Use destructuring to make this code ES6. 

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

const [firstFav, secondFav, thirdFav] = favoriteActivities


function returnFavorites(arr){
    return `My top three favorite activities are, ${firstFav}, ${secondFav} and ${thirdFav}`
}

console.log(returnFavorites(favoriteActivities))

// ^ Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals.
const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = [...arr1,...arr2]

const obj1 = {
  name: "john",
  age: 24
}

const obj2 = { 
  color: "Blue", 
  food: "Pizza",
  ...obj1
}

/*
 {  name: "john",
    age: 24, 
    color: "Blue",
    food: "Pizza"
 }

*/

const obj3 = { 
  ...obj1, 
  ...obj2
}

function combineAnimals(...animals) {  

  // map through array of arrays 
  // spread each array to a new array 
  // return animals.map(animalArr => [...animalArr])
 return animals.concat(realAnimals,magicalAnimals,mysteriousAnimals)
}

console.log(combineAnimals())

// ^ Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.

function product(...numbers) {  
    return numbers.reduce((acc, number) => {
      return acc * number
    }, 1)
  }

  console.log(product(1, 2, 3, 4, 5, 6, 7, 8))

//  ^ Make the following function more ES6xy.
  const numbers = [0,1,2,3,4,5]
  function unshift(array, ...letters) {  
    return array.concat(letters);
  }

  console.log(unshift(numbers, 'red', 'green', 'orange', 'yellow'))
  // ^ Make the following function more ES6xy. Use at least both the rest and spread operators.

  const populatePeople = (names) => {
    return names.map((name) => {
        name = name.split(" ");
        return {
            firstName: name[0],
            lastName: name[1]
        }
    })
}
console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))

// ^ Write some destructuring code to help this function out. Use the ES6 shorthand that helps make the syntax look less redundant to simplify it.

