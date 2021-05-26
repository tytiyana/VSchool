const numbers =[8,3,5,2,7,9,19,5,7,3,45,876]
function max (array){
   return numbers.reduce((previous, current) => previous > current ? previous : current)
}
console.log(max(numbers))


function findLetter(words, character){
    const filtered = []
    for (let i = 0; i < words.length; i++) {
       if (words[i].includes(character)){
            filtered.push(words[i])
       }
    }
    return filtered
} 
console.log(findLetter(["#3", "$$$", "C%4!", "Hey!", "!"], "!")) 

function isDivisible (num1,num2){
    if (num1 % num2 == 0) {
        return("Is Divisble")
    } else {
        return("Not Divisible")
    }
}
console.log(isDivisible(4,6))