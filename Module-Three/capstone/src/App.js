import React, { Component } from 'react'
import "./styles.css"
import Meme from './Meme'
import NewMeme from './NewMeme'

const axios = require('axios')


const random = Math.floor(Math.random() * 100)

class App extends Component{
    constructor(props){
        super(props)
        this.state={
            meme: [],
            topText: "",
            bottomText: "",
            url: "",
            createdMemes: [],
            createdMemeData: {
                topText: "",
                bottomText: "",
                url: ""
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.editMeme = this.editMeme.bind(this)
        this.deleteMeme = this.deleteMeme.bind(this)
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

    handleSubmit(e){
        e.preventDefault()
        this.setState(prev => ({
            createdMemeData: {
                ...prev.createdMemeData, 
                topText: prev.topText,
                bottomText: prev.bottomText,
                url: prev.meme[random].url
            }, createdMemes: [...prev.createdMemes, this.state.createdMemeData]
        }))
    }

    handleChange(e){
        const {name, value} = e.target
        this.setState({
            [name]: value
        }) 
    }

    editMeme(){
    
    }

    deleteMeme(){
        this.setState(this.state.createdMemes.splice(this.state.createdMemes.index, 1))
    }

    render(){
        const memes = this.state.meme.map((info,index) => <Meme key={index}url={info.url} topText={this.state.topText} bottomText={this.state.bottomText}/>)

        const newMeme = this.state.createdMemes.map((info,index) => <NewMeme key={index} url={this.state.createdMemeData.url} topText={this.state.createdMemeData.topText} bottomText={this.state.createdMemeData.bottomText} edit={this.editMeme} delete={this.deleteMeme}/>)
        
        return(
            <div>
                {memes[random]}
                {newMeme}
                <form  onSubmit={this.handleSubmit}>
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