const vegetables = ["carrot", "tomato", "pepper", "lettuce"]
const fruit = ["banana", "apple", "orange", "watermelon"]

function arrayMethods(){
vegetables.pop()
console.log(vegetables)

fruit.shift()
console.log(fruit)

let index = fruit.indexOf("orange")
console.log(index)

fruit.push("1")
console.log(fruit)

let length = vegetables.length
console.log(length)

vegetables.push("3")
console.log(vegetables)

let food = fruit.concat(vegetables)
console.log(food)

food.splice(4,2)
console.log(food)

food.reverse()
console.log(food)

let join = food.join(" ")
console.log(join)

let split = join.split(" ")
console.log(split)
return("Done")
}
console.log(arrayMethods())