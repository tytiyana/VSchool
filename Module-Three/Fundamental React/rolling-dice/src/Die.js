import React from 'react'

function Die (props){
    return(
        <h1 style={{width: 100,height:100, borderStyle:'solid',borderWidth: 1, borderColor: 'black'}}>{props.text}</h1>
    )
}

export default Die