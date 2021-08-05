import React, { Component } from 'react'
import Card from './Card'
import {Container, Row, Col } from 'react-grid-system'

const axios = require('axios')


class App extends Component{
    constructor(props){
        super(props)
        this.state={
            targets: []
        }
    }

    componentDidMount(){
       axios.get(`https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json`)
       .then(response => response.data)
       .then(data => {
           this.setState({
               targets: [...data]
           })
       })
    }
        
    render(){
        const hitList = this.state.targets.map(cardData => <Card image={cardData.image} name={cardData.name} /> )
        return(
            <div>
            {hitList}
            </div>
        )
    }
      
}

export default App