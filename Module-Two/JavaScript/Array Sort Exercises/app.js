const numbers = [1, 3, 5, 2, 90, 20]
numbers.sort((a,b) => a-b)
console.log(numbers)
// Sort an array from smallest number to largest.

numbers.sort((a,b) => b-a)
console.log(numbers)
// Sort an array from largest number to smallest.

const words = ["dog", "wolf", "by", "family", "eaten"]
words.sort((a,b) => a.length -b.length)
console.log(words)
// Sort an array from shortest string to longest.

words.sort()
console.log(words)
// Sort an array alphabetically.

const people = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]
people.sort((a,b) => a.age -b.age)
console.log(people)
// Sort the objects in the array by age.