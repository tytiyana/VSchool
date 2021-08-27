import React, { Component } from 'react'
import ReactDOM from 'react-dom'
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
            },
            newTopText: "",
            newBottomText: ""
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
        this.setState(() => ({
            createdMemeData: {
                ...this.state.createdMemeData, 
                topText: this.state.topText,
                bottomText: this.state.bottomText,
                url: this.state.meme[random].url
            }, createdMemes: [...this.state.createdMemes, this.state.createdMemeData]
        }))
    }

    handleChange(e){
        const {name, value} = e.target
        this.setState({
            [name]: value
        }) 
    }

    editMeme(){
       const input = (
           <div>
               <form onSubmit={this.submitNewMeme}>
               <input type="text" name="newTopText" value={this.state.newTopText.value} placeholder="New Top Text"/>
               <input type="text" name="newBottomText" value={this.state.newBottomText.value} placeholder="New Bottom Text"/>
               <button>Click</button>
               </form>
           </div>
       )
       ReactDOM.render(input, document.getElementById("newInputs"))
    }

    deleteMeme(){
        this.setState(this.state.createdMemes.splice(this.state.createdMemes.index, 1))
    }

    render(){
        const memes = this.state.meme.map((info,index) => <Meme key={index}url={info.url} topText={this.state.topText} bottomText={this.state.bottomText}/>)

        const newMeme = this.state.createdMemes.map((info,index) => <NewMeme className="newMeme" key={index} url={this.state.createdMemeData.url} topText={this.state.createdMemeData.topText} bottomText={this.state.createdMemeData.bottomText} edit={this.editMeme} delete={this.deleteMeme}/>)

        return(
            <div>
                {memes[random]}
                {newMeme}
                <form  onSubmit={this.handleSubmit}>
                <input 
                type="text" 
                name="topText"
                value={this.state.topText.value} 
                onChange={this.handleChange}
                placeholder="Top text"
                />
                <input 
                type="text" 
                name="bottomText"
                value={this.state.bottomText.value} 
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