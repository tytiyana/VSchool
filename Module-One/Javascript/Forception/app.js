const people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
const alphabet = "abcdefghijklmnopqrstuvwxyz"
const alphaSplit = alphabet.split("")


function forception (){
    for (let i = 0; i < 5; i++){
        for (let j = 0; j < 1; j++){
            console.log(people[i], alphaSplit)
        }
    }
    return("Done")
}
console.log(forception())