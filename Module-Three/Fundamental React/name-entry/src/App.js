import React, { Component } from 'react'
import List from './List'

class App extends Component{
    constructor(){
        super()
        this.state={
            firstName: "",
            listOfNames: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event){
        this.setState({firstName: event.target.value})
    }

    handleSubmit(){
        this.setState(prevState => ({
            listOfNames: [...prevState.listOfNames,this.state.firstName]
        }))
    }
    
    render(){
        const list = this.state.listOfNames.map((item, index) => <List key={index} listItem={item}/>)
        console.log(list)
        return(
            <div>
                <form>
                    <input
                     id="form"
                     name="firstName"
                     value={this.state.firstName}
                     onChange={this.handleChange}
                     placeholder="First Name" 
                     />
                </form>
                <h1>{this.state.firstName}</h1>
                <button onClick={this.handleSubmit}>Submit</button>
                {list}
            </div>
        )
    }
}
export default App