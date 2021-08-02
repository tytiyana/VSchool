import React from 'react'
import { Container, Row, Col} from 'react-grid-system'

function Badge(props){
    return(
        <div>
        <Container fluid style={{borderStyle: 'solid',borderColor: 'black', borderWidth: 3, borderRadius: 10}}>
            <Row><Col debug><p>Badge:</p></Col></Row>
            <Row>
                <Col debug><span>Name: {props.firstName}</span>
                <span> {props.lastName}</span></Col>
            </Row>
            <Row>
            <Col debug><span>E-Mail: {props.email}</span></Col>
            <Col debug><span> Place of Birth: {props.placeOfBirth}</span></Col>
            </Row>
            <Row>
            <Col debug><span>Phone Number: {props.phoneNumber}</span></Col>
            <Col debug><span>Favorite Food: {props.favFood}</span></Col>
            </Row>
            <Row>
            <Col debug style={{borderStyle: 'solid',borderColor: 'black', borderWidth: 3}}><p>{props.selfDescription}</p></Col>
            </Row>
        </Container>
        </div>
    )
}

export default Badge