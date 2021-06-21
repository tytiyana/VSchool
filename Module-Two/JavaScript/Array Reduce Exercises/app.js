const numbers = [1,2,3]
const total = numbers.reduce((final, current) => {
    final += current
    return final
})
console.log(total)
// Turn an array of numbers into a total of all the numbers.

const stringMe = numbers.reduce((final, current) => {
    final = numbers.join("")
    return final
})
console.log(stringMe)
// Turn an array of numbers into a long string of all those numbers.

const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]
const totalVoters = voters.reduce((final, voter) => {
    if (voter.voted){
        final++
    }
    return final
}, 0)
console.log(totalVoters)
//  Turn an array of voter objects into a count of how many people voted.

const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]
const addItUp = wishlist.reduce((final, wishlist)=>{
    final += wishlist.price
    return final
}, 0)
console.log(addItUp)
//  Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once.

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]

const flatten = arrays.reduce((final, current) => {
       final = [].concat(arrays[0],arrays[1],arrays[2])
       return final
}, [])

console.log(flatten)
// Given an array of arrays, flatten them into a single array.

const voterStats = voters.reduce((final, voters) => {
    if (voters.age >= 18 && voters.age <= 25) {
        final.youngVoters++
    } if (voters.age >= 18 && voters.age <= 25 && voters.voted) {
        final.youngVotes++
    } if (voters.age >= 26 && voters.age <= 35) {
        final.middleAgedVoters++
    }if (voters.age >= 26 && voters.age <= 35 && voters.voted) {
        final.middleAgedVotes++
    } if (voters.age >= 36 && voters.age <= 55) {
        final.seniorVoters++
    } if (voters.age >= 36 && voters.age <= 55 && voters.voted) {
        final.seniorVotes++
    }
    return final
}, {youngVoters: 0, youngVotes: 0, middleAgedVoters: 0, middleAgedVotes: 0, seniorVoters: 0, seniorVotes: 0})

console.log(voterStats)
// Given an array of potential voters, return an object representing the results of the vote.