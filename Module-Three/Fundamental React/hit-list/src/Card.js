import React from 'react'
import {Container, Row, Col } from 'react-grid-system'

function Card(props){
    return(
        <div>
            <Container fluid>
                <Row> <img style={{width: 200}} src={props.image} alt="Person"/> 
                <span> {props.name} </span>
                </Row>
            </Container>
        </div>
    )
}

export default Card