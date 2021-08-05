import React, { Component } from 'react'

const axios = require('axios')

class App extends Component{
    constructor(props){
        super(props)
        this.state={
            colors: "white"
        }
    }


    componentDidMount(){
        axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
        .then(response => response.data)
        .then(data => {
            const colorData = data.colors
            console.log(colorData)
            this.setState({
                colors: colorData[0].hex
            })
        }) 
    }


    render(){
        const body = document.body
        return( 
            <div>
                {body.style.backgroundColor= `#${this.state.colors}`}
            </div>
        )
    }
}

export default App