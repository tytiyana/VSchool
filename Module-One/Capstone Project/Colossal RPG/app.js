const readline = require("readline-sync")
readline.setDefaultOptions({limit: [`w`, `i`,`q`,`f`,`r`,`a`,`m`, `s`, `p`, `re`, `sp`,`t`,``]})
const userName = readline.question(`May I have your name?`, {limit:[null]})
console.log(`Hello ${userName}! Welcome to the Avengers. My name is 'Jarvis'. I'll be training you before your mission. We've heard a lot about your abilities from Agent Coulson. When you arrived to Avengers Headquarters, you were placed in a simulation. This is the beginning of your training. As you navigate through this simulation enemies will appear at random and you'll be given the choice to fight or run. If you fight and die, you will start over. If you run and don't manage to escape, you will start over. If you fight and win, you will continue on and if you successfully escape, you will continue on. If this ever becomes too much, you may quit but you will lose all progress and need to start over when you are ready. Good luck and just remember, the world needs you. Once you pass your training you will offically be an Avenger and you will protect the world at any cost. Start by walking.
Use "w" to walk, "i" to check your inventory, "f" to fight, "r" to run, and "q" to quit at anytime. Once you've read a statement, press return to continue.`)


  //*---------* Beginning of RPG *-----------*//
  const playerDetails = {
    name: `${userName}`,
    healthPoints: 100,
    isAlive: true
  }  // can't figure out how to get this to work or the inventory. Or a way of implementing an add to the current inventory or removal of an item after use. Once you die game ends. //


while (playerDetails.healthPoints >= 1) {
const input = readline.prompt()
if (input === "w") {
  /*---------* Player Essentials*-----------*/
  class Inventory{
    constructor(name, damage, recoveryHp){
      this.name = name,
       this.damage = damage,
          this.recoveryHp = recoveryHp
    }
  }       const mindStone = new Inventory(`Mind Stone`, 100, 20)
          const powerStone = new Inventory(`Power Stone`, 100, 20)
          const realityStone = new Inventory(`Reality Stone`, 100, 20)
          const spaceStone = new Inventory(`Space Stone`, 100, 40)
          const timeStone = new Inventory(`Time Stone`, 100, 30)
          const soulStone = new Inventory(`Soul Stone`, 300, 0)
          const infinityGauntlet = new Inventory(`Infinity Gauntlet`, 100, 100)

          // const inventoryItems = [mindStone, powerStone, realityStone, spaceStone, timeStone, soulStone]

         class Enemies {
          constructor(name, health, attack1, attack2, attack3){
            this.name = name
            this.health = health
            this.attack1 = attack1
            this.attack2 = attack2
            this.attack3 = attack3
          }
        }       
                const thanos = new Enemies (`Thanos`, 300, 45, 25, 30)
                const ultron = new Enemies (`Ultron`, 100, 40, 25, 25)
                const carnage = new Enemies (`Carnage`, 100, 20, 25, 30)
                const loki = new Enemies (`Loki`, 100, 30, 15, 35)
                const whiplash = new Enemies (`Whiplash`, 100, 30, 35, 30)
                const dormammu = new Enemies (`Dormammu`, 100, 50, 15, 10)
                const hela = new Enemies (`Hela`, 100, 30, 40, 25)
                const killmonger = new Enemies (`Killmonger`, 100, 20, 15, 10)
                const enemies = [thanos, ultron, carnage,loki,whiplash,dormammu,hela, killmonger]  
                const choiceOfEnemy = Math.floor(Math.random() * enemies.length)
                const currentEnemy = enemies[choiceOfEnemy] 
                const chanceOfEnemyAppearance = Math.ceil(Math.random() * 4)
  /*---------* Player Essentials*-----------*/
             if (chanceOfEnemyAppearance === 2) {
              if (playerDetails.healthPoints > 1 ){
               const enemyhasAppeared = readline.question(`${currentEnemy.name} has appeared. Would you like to run("r") or fight("f")?`)
               const input = readline.prompt()
               if (enemyhasAppeared === "r") {
                 const chanceOfEscape = Math.ceil(Math.random() * 2)
                 if (chanceOfEscape === 1) {
                   console.log(`Great, ${userName} you've escaped. You took 20pt damage.`)
                   console.log(`Your current Health is at ${playerDetails.healthPoints -= 20}`)
                 } else {
                   console.log(`${userName}, ${currentEnemy.name} captured and killed you.`)
                   playerDetails.isAlive = false
                   return
                 }
          
               } else if (input === "f"){
                 /*---------* Battle Logic *-----------*/
                console.log(`Battle against ${currentEnemy.name} begins.`)
                const attacks = [currentEnemy.attack1, currentEnemy.attack2, currentEnemy.attack3]
                const attackChance = attacks.sort(() => Math.random() - 0.5)
                const attackChanceResult = []
                attackChanceResult.push(attackChance)
                
                /*---------* Battle Logic *-----------*/
                console.log(`${currentEnemy.name} attacks you. Your health is now ${playerDetails.healthPoints -= attackChanceResult[0][0]}`)
                console.log(`Attack("a"), attack with item from inventory("i") or run("r")?`)
                const input = readline.prompt()
                if (input === "a") {
                  while (playerDetails.healthPoints > 0 && currentEnemy.health > 0) {
                  console.log(`${currentEnemy.name} hits back and your health is currently at ${playerDetails.healthPoints -= attackChanceResult[0][0]}. You attack ${currentEnemy.name} back and their health is now at ${currentEnemy.health -= 25}.`) 
                  readline.prompt()
                  if (currentEnemy.health < 0){
                    console.log(`Amazing, ${userName}! ${currentEnemy.name} is now dead. Let's keep going!`)
                    console.log(`Since, you beat ${currentEnemy.name} you've recieved the ${infinityGauntlet.name}.`)
                    break
                  } 
                  if (playerDetails.healthPoints <= 0) {
                    console.log(`${userName}, ${currentEnemy.name} 'killed you. Try again!`)
                    playerDetails.isAlive = false
                    return
                  }                 
                  console.log(`To attack again press "a", attack with item from inventory("i") or run("r")`) 
                }
                  

                  
                  /*---------* Access Inventory *-----------*/
               } else if (input === "i"){
                 console.log(`
                       ------------------------------------------------------------------------
                       Inventory Items:
                       - Mind Stone
                       - Soul Stone
                       - Power Stone
                       - Reality Stone
                       - Space Stone
                       - Time Stone
                       ------------------------------------------------------------------------
                       Which would you like to use?
                      press m = Mind Stone
                      press s = Soul Stone
                      press p = Power Stone
                      press re = Reality Stone
                      press sp = Space Stone
                      press t = Time Stone
                       `)
                     const input = readline.prompt()
                     if (input === "m") {
                       console.log(`${userName} you've chosen the Mind Stone and your current hP is now ${playerDetails.healthPoints += mindStone.recoveryHp} and ${currentEnemy.name}'s health is at ${currentEnemy.health -= mindStone.damage}`)
                      if (currentEnemy.health === 0){
                        console.log(`Amazing, ${userName}! ${currentEnemy.name} is now dead. Let's keep going!`)
                        console.log(`Since, you beat ${currentEnemy.name} you've recieved the ${infinityGauntlet.name}.`)
                      }        
                     }if (input === "s"){
                       console.log(`${userName} you've chosen the Soul Stone ${playerDetails.healthPoints += soulStone.recoveryHp} and ${currentEnemy.name}'s health is at ${currentEnemy.health -= soulStone.damage}`)
                       if (currentEnemy.health === 0){
                        console.log(`Amazing, ${userName}! ${currentEnemy.name} is now dead. Let's keep going!`)
                        console.log(`Since, you beat ${currentEnemy.name} you've recieved the ${infinityGauntlet.name}.`)
                      } 
                     }if (input === "p"){
                       console.log(`${userName} you've chosen the Power Stone ${playerDetails.healthPoints += powerStone.recoveryHp} and ${currentEnemy.name}'s health is at ${currentEnemy.health -= powerStone.damage}`)
                       if (currentEnemy.health === 0){
                        console.log(`Amazing, ${userName}! ${currentEnemy.name} is now dead. Let's keep going!`)
                        console.log(`Since, you beat ${currentEnemy.name} you've recieved the ${infinityGauntlet.name}.`)
                      } 
                     }if (input === "re"){
                       console.log(`${userName} you've chosen the Reality ${playerDetails.healthPoints += realityStone.recoveryHp} and ${currentEnemy.name}'s health is at ${currentEnemy.health -= realityStone.damage}`)
                       if (currentEnemy.health === 0){
                        console.log(`Amazing, ${userName}! ${currentEnemy.name} is now dead. Let's keep going!`)
                        console.log(`Since, you beat ${currentEnemy.name} you've recieved the ${infinityGauntlet.name}.`)
                      } 
                     }if (input === "sp"){
                       console.log(`${userName} you've chosen the Space Stone ${playerDetails.healthPoints += spaceStone.recoveryHp} and ${currentEnemy.name}'s health is at ${currentEnemy.health -= spaceStone.damage}`)
                       if (currentEnemy.health === 0){
                        console.log(`Amazing, ${userName}! ${currentEnemy.name} is now dead. Let's keep going!`)
                        console.log(`Since, you beat ${currentEnemy.name} you've recieved the ${infinityGauntlet.name}.`)
                      } 
                     }if (input === "t"){
                       console.log(`${userName} you've chosen the Time Stone ${playerDetails.healthPoints += timeStone.recoveryHp} and ${currentEnemy.name}'s health is at ${currentEnemy.health -= timeStone.damage}`)
                       if (currentEnemy.health === 0){
                        console.log(`Amazing, ${userName}! ${currentEnemy.name} is now dead. Let's keep going!`)
                        console.log(`Since, you beat ${currentEnemy.name} you've recieved the ${infinityGauntlet.name}.`)
                      } 
                     }/*---------* Access Inventory & Choose Item *-----------*/
                
                
                   } if (input === "r"){
                    const chanceOfEscape = Math.ceil(Math.random() * 2)
                    if (chanceOfEscape === 1) {
                    console.log(`Great, ${userName} you've escaped. You took 20 hit points.`)
                    console.log(`Your current Health is at ${playerDetails.healthPoints -= 20}`)
                  } else {
                    console.log(`Awesome, You got away without taking any damage.`)
                  }
                }
                
              }  
            } 
          }
        }
        if (input === "q") {
          return 
        } 
} 
   

/*---------* End of RPG *-----------*/
  

  





