import React, { Component } from 'react'

import "./styles.css"

import Meme from './Meme'
const axios = require('axios')
const random = Math.floor(Math.random() * 100)

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
                meme: memeData
            })
        })
    }

    handleSubmit(){
        this.setState(prevState => ({
         meme: [...prevState.meme, this.state.topText, this.state.bottomText]
        }))
    }

    handleChange(e){
        e.preventDefault()
        const {name, value} = e.target
        this.setState({
            [name]: value
        }) 
    }

    render(){
        const memes = this.state.meme.map(info => <Meme url={info.url} topText={this.state.topText} bottomText={this.state.bottomText}/>)
        
        

        return(
            <div>
                <h1 id="top">{this.state.topText}</h1>
                {memes[random]}
                <h1 id="bottom">{this.state.bottomText}</h1>

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

