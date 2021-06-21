class Player {
    constructor(name = "Mario", totalCoins = 0, status = "Small", hasStar = false){
        this.name = name
        this.totalCoins = totalCoins  
        this.status = status
        this.hasStar = hasStar
    } 

    gameActive = true

    setName(namePicked){
        const randomChance = Math.ceil(Math.random() * 2)
        if (randomChance === 1) {
            this.name = "Mario"
            console.log(namePicked)
        } else {
            this.name = "Luigi"
            console.log(namePicked)
        }
    }

    gotHit(){
        if(this.status === "Powered Up!"){
            this.status = "Big"
        } else if (this.status === "Big") {
            this.status = "Small"
        } else if (this.status === "Small"){
            this.status = "Dead"
        }
        
           if (this.status === "Dead") {
                 this.gameActive = false
            }
        }

    gotPowerUp(){
        const randomChance = Math.ceil(Math.random() * 2)
            if (randomChance === 1){
            this.status = "Powered Up!"
            console.log(`You've powered up!`)
            }   

            this.status === "Small" ? this.status = "Big" : this.status === "Big" ? "Powered Up" : "problems"

            if (this.status === "Powered Up") {
                this.hasStar = true
                 }
    }

    addCoin(){
        const randomChance = Math.ceil(Math.random() * 2)
        if (randomChance === 2){
            this.totalCoins++
            console.log(`You've gained a coin!`)
        }
    }

    print(){
       console.log(this)
    }
}

const interval = setInterval(randomRange, 1000)
function randomRange() {
    // console.log(this)
    let numsNums = Math.ceil(Math.random() * 3)
    if (numsNums === 1) {
        mario.gotHit() // the charater gets hit by an enemy  
    } else if (numsNums === 2) {
        mario.gotPowerUp() // the charter gets a power up   
    } else {
        mario.addCoin() // total coins will have one added to the total  
    }
    mario.print()

    if (mario.gameActive === false) {
        clearInterval(interval)
    }

}

//Players//
    const mario = new Player ("Mario", 0, "small", false)
//Players//   




    
