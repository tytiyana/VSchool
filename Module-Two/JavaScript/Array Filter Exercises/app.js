const numbers = [3, 6, 8, 2]
const filterGreaterThan = numbers.filter(numbers => numbers > 5)
console.log(filterGreaterThan)
// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

const filterEven = numbers.filter(numbers => numbers % 2 === 0)
console.log(filterEven)
// Given an array of numbers, return a new array that only includes the even numbers.

const words = ["dog", "wolf", "by", "family", "eaten", "camping"]
const fiveCharacters = words.filter(words => words.length <= 5)
console.log(fiveCharacters)
// Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length.

const members = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]
const memberOrNot = members.filter(members => members.member === true )
console.log(memberOrNot)
// Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

const membersAge = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]
const memberAge = membersAge.filter(membersAge => membersAge.age > 18)
console.log(memberAge)
// Make a filtered list of all the people who are old enough to see The Matrix (older than 18).