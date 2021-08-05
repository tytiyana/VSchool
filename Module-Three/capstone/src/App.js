import React, { Component } from 'react'

import Meme from './Meme'
const axios = require('axios')

class App extends Component{
    constructor(){
        super()
        this.state={
            meme: []
        }
    }

    componentDidMount(){
        axios.get(`https://api.imgflip.com/get_memes`)
        .then(response => response.data)
        .then(data => {
            const memeData = data.data.memes
            console.log(memeData)
            this.setState({
                meme: [...memeData]

            })
        })
        console.log(this.state.meme)
    }

    render(){
        const memes = this.state.meme.map(info => <Meme url={info.url} name={info.name}/>)
        return(
            <div>
                {memes}
            </div>
        )
    }
}

export default App