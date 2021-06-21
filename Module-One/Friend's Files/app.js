/**
 * Project Requirements:
    Console must greet player with a fun message
    Console must ask for the player's name and store it
    Walking:
    The console will ask the user to enter a "w" to walk
    Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)
    If a wild enemy appears:
    The enemy is random (can be chosen out of a minimum of 3 different enemy names)
    The user can decide to attack or run
    If attacking, a random amount of damage will be delt between a min and max
    If running, there will be a 50% chance of escaping
    After the player attacks or runs the enemy attacks back for a random damage amount
    If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory. After this, the player will continue walking. Use a while loop to control this flow.
    If the enemy kills the player the console prints a cool death message and the game ends
    Inventory
    When the player kills enemies, they are awarded with items
    If the user enters 'Print' or 'p' in the console, the console will print the players name, HP, and each item in their inventory
    RPG -- Fix some of the bugs you had, 
       1. make sure there are no double assigned variables (let name = playerName = 'joe')
       2. make sure that your fight loop stops after you or the enemy hp < 0
       3. game should stop once player hp < 0
       4. make sure game doesn't unnecessarily repeat any lines or misprint any values ex: hp
 * 
 */
       const readline = require(`readline-sync`)
       
       readline.setDefaultOptions({ limit: [`w`, `i`, `q`] });
       const userName = readline.question(`What is your name?   `, { limit: null })
       const playerDetails = {
           name: `${userName}`,
           healthPoints: 100,
           isAlive: true
       }
       class Inventory {
           constructor(name, damage, recoveryHp) {
               this.name = name,
                   this.damage = damage,
                   this.recoveryHp = recoveryHp
           }
       }
       const theReaper = new Inventory(`Reaper`, 25, 0)
       const healSpell = new Inventory(`Heal Drop`, 5, 20)
       const dud = new Inventory(`Dud Guppy`, 0, 0)
       const arryOfItems = [theReaper, healSpell, dud]
       // ---------------^^ global variables ^^ -------------------//
       console.log(`  
       Hi ${userName}! 
       current control options: 
       w -- walk
       i -- inventory
       q -- quit
       `)
       while (playerDetails.isAlive) {
           input = readline.prompt();
           let playerHealthPoints = playerDetails.healthPoints;
           let inputValue = `--> Player:${userName}  input:--> ${input}  ---> Current Hp: ${playerHealthPoints}%`;
           console.log(inputValue)
           if (input === `w`) {
               let number = Math.floor(Math.random() * 4) + 1
               if (number === 1) { // user walks into a random monster because the number 1 has been picked with let number 
                   class Enemies {
                       constructor(name, strength, combo1, combo2, combo3) {
                           this.name = name,
                               this.strength = strength,
                               this.combo1 = combo1,
                               this.combo2 = combo2,
                               this.combo3 = combo3
                       }
                   }
                   const enemyOne = new Enemies(`Golem`, 200, 20, 30, 40)
                   const enemyTwo = new Enemies(`Electric Wizward`, 100, 10, 15, 35)
                   const arryOfEnemies = [enemyOne, enemyTwo]
                   const pickOfEnemy = Math.floor(Math.random() * arryOfEnemies.length);
                   const currentEnemy = arryOfEnemies[pickOfEnemy];
                   const hitwithReaper = () => currentEnemy.strength - theReaper.damage
                   let blah = currentEnemy.strength
                   let comboOptions = [currentEnemy.combo1, currentEnemy.combo2, currentEnemy.combo3]
                   let comboSelecter = Math.floor(Math.random() * comboOptions.length) + 1
                   const ranAcrossEnemy = readline.question(`
                   ${userName} you've ran accross and attacked ${currentEnemy.name}! 
                   What should we do:
                   ------------------
                   a : attack
                   r : run
                   ${currentEnemy.name}: remaining HP:${hitwithReaper()}
                   `, { limit: ['a', `r`] })
                   if (ranAcrossEnemy === `a`) {
                       //const hitwithReaper = () => currentEnemy.strength - theReaper.damage
                       hitwithReaper()
                       while (blah > 0 & playerDetails.healthPoints !== 0) {
                           if (blah <= 25) {
                               console.log(`you killed ${currentEnemy.name} now use a heal spell!`)
     
     
                               break
                           }
                           if (playerDetails.healthPoints <= 0) {
                               console.log(`you died at the hands of ${currentEnemy.name}`)
                               playerDetails.isAlive = false
                               break
                           }
                           let battle = readline.question(`
                   attack again or run? --> ${currentEnemy.name} HP:${blah}`
                               , { limit: [`a`, `r`] });
                           if (battle === `a`) {
                               let declingHP = blah -= theReaper.damage
                               if (declingHP >= 25) {
                                   playerDetails.healthPoints -= comboOptions[comboSelecter]
                                   console.log(`
                   ${currentEnemy.name} hits back! ${userName} HP:${playerDetails.healthPoints}%
                                   `)
                               }
                           } else if (battle === `r`) {
                               console.log(`back to walking!`)
                               break;
                           }
                       }
                   } else if (ranAcrossEnemy === `r`) {
                       let runningChances = Math.floor(Math.random() * 2) + 1
                       if (runningChances === 2) {
                           let lowMoral = playerHealthPoints - 10
                           console.log(`you tried to run away and for that your moral has fallen to: ${lowMoral}HP`)
                       } else {
                           runningChances === 1
                           console.log(`nice! you got away without losing moral
                           press w to start walking again.`)
                           continue;
                       }
                   }
               } else {
                   console.log(`Walking`)
               }
           } else if (input === `i`) {
               let displayOfInventory = readline.question(`  
               ------------------------------------------------------------------------
               Inventory :
                   - ${healSpell}
                   - Weapon - ${theReaper.name} // damage: ${theReaper.damage}
                   - Healing Spell -  ${healSpell.name} // HP+: ${healSpell.recoveryHp}
               ------------------------------------------------------------------------
                           ${userName} what would you like to use? 
                            w = Weapon 
                            h = Heal Spell
                            `
                   , { limit: [`w`, `h`, `c`] })
               if (displayOfInventory === `w`) {
                   console.log(`you picked: ${theReaper.name}`)
                   continue;
               } else if (displayOfInventory === `h`) {
                   playerDetails.healthPoints += healSpell.recoveryHp
                   console.log(`Current HP now at: ${playerDetails.healthPoints}HP back to walking!`)
               }
           }
           if (input === `q`) {
               break;
           }
       }
       console.log(`You've exited the game... Goodbye`);
       
       
    //XVR
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       