import React, { Component } from 'react'



import Meme from './Meme'
const axios = require('axios')

class App extends Component{
    constructor(){
        super()
        this.state={
            meme: [],
            topText: "",
            bottomText: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){
        axios.get(`https://api.imgflip.com/get_memes`)
        .then(response => response.data)
        .then(data => {
            const memeData = data.data.memes
            this.setState({
                meme: [...memeData]
            })
        })
    }

    handleSubmit(){

    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        }) 
    }

    render(){
        const memes = this.state.meme.map(info => <Meme url={info.url} name={info.name}/>)
        const memesss = memes.sort(() => Math.random() - 0.5)
        return(
            <div>
                <h1>{this.state.topText}</h1>
                {memes[0]}
                <h1>{this.state.bottomText}</h1>
                <button onClick={()=>{window.location.reload()}}>Next</button>

                <form onSubmit={this.handleSubmit}>
                <input 
                type="text" 
                name="topText" 
                onChange={this.handleChange}
                placeholder="Top text"
                />
                <input 
                type="text" 
                name="bottomText" 
                onChange={this.handleChange}
                placeholder="Bottom text"
                />
                <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default App

