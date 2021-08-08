import React, { Component } from 'react'
const axios = require('axios');

class App extends Component{
    constructor(){
        super()
        this.state={
            apiMeme={
                url: ""
            }
            createdMeme={
                url: "",
                topText: "",
                bottomText: ""

            },
            apiMemes: [],
            createdMemes: []
        }
    }

    componentDidMount(){
        axios.get(`https://api.imgflip.com/get_memes`)
        .then(response => response.data)
        .then(data => {
            const memeData = data.data.memes
            this.setState({
                apiMeme ={
                    url = memeData.url
                },
                apiMemes: []
            })
        })
    }

    render(){
        return(

        )
    }
}

export default App