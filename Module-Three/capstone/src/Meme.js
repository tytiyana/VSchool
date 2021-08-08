import React from 'react'
// import { Container, Row, Col } from 'react-grid-system'

function Meme(props){
    return(
        <div>
            <h1>{props.topText}</h1>
            <img src={props.url} alt={props.name} width={props.width}></img>
            <h1>{props.bottomText}</h1>
            <h1> {props.name} </h1>
        </div>
    )
}

export default Meme