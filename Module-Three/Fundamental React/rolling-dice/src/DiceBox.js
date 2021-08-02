import React, {Component} from 'react'
import Die from './Die'

class DiceBox extends Component{
    constructor(){
        super()
        this.state = {
           numbers: [0,0,0,0,0]
        }
        this.rollDie = this.rollDie.bind(this)
    }
    rollDie(){
        this.setState(prevState => {
            return{
                numbers: prevState.numbers.map(num => Math.floor(Math.random(num) * 6))
            }            
        })   
    }
    render(){
        const dice = this.state.numbers.map(num => <Die text={num}/>)
        return(
            <div>
                {dice}
                <button onClick={this.rollDie}>Roll Dice</button>
            </div>  
        )
    }
}
export default DiceBox