import React from 'react'
import { Container, Row, Col } from 'react-grid-system'

function Meme(props){
    return(
        <Container fluid>
        <Row debug>
        <div>
            <img src={props.url} alt={props.name} width={props.width}></img>
            <h1> {props.name} </h1>
        </div>
        </Row>
        </Container>
    )
}

export default Meme