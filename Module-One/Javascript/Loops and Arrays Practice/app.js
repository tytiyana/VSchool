// #1
const officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]


let computerTimes = 0
for (let i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === "computer") {
        computerTimes++
    }
}
console.log(computerTimes)

const peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

  for (let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    const madMaxViewers = peopleWhoWantToSeeMadMaxFuryRoad[i]; if (madMaxViewers.age >= 18 && madMaxViewers.gender == "female") {
      console.log(madMaxViewers.name + " is old enough. She's good to see Mad Max Fury Road.")
    }else if (madMaxViewers.age >= 18 && madMaxViewers.gender == "male") {
      console.log(madMaxViewers.name + " is old enough. He's good to see Mad Max Fury Road.")
    } else {
      console.log(madMaxViewers.name + " is not old enough to see Mad Max Fury Road, don't let them in.")
    }
    }
