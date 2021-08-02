import React from "react"
import styled from "styled-components"

const Name = styled.h3`color: purple;`
const Age = styled.h4`color: blue;`
const PetName = styled.p`color: pink;`
const PetBreed = styled.p`color: magenta;`

function Friend(props){
    return(
        <div>
            <Name>{props.name}</Name>
            <Age>{props.age}</Age>
            <PetName> {`Name(s): ${props.petName} `} </PetName>
            <PetBreed> {`Breed(s): ${props.petBreed} `} </PetBreed>
            <hr/>
        </div>
    )
}


export default Friend