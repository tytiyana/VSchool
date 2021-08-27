const readline = require(`readline-sync`)
const userName = readline.question (`What is your name?`);
console.log (`Hello,${userName} welcome to the Escape Room. You're locked inside here unless you find a way to escape. In order to escape the room, you need to find the key that opens the door. There's also a large hole in the wall, you can see where that leads you. There's also a few surprises! Be careful & good luck!`)

const startLine = readline.question (`Okay, ${userName} what would you like to do, look for the key or put your hand through the hole?`);
console.log (`Okay, ` + userName + ` let's go ` + startLine + `.`)

function findKey (){startLine}

if(startLine === `look for the key`) {
    let  lookKey = findKey  (startLine)
console.log (`You found a key and it unlocks the door! Good job!`)
}

function handHole (){startLine}

if(startLine === `put my hand through the hole`) {
    let  holeHand = handHole  (startLine)
console.log (`Oh no, You died! You got bit by a super poisonous spider when you put your hand through the wall.!`)
}