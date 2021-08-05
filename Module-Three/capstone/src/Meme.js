import React from 'react'

function Meme(props){
    return(
        <div>
            <img src={props.url} alt={props.name} width={props.width}></img>
            <h1> {props.name} </h1>
        </div>
    )
}

export default Meme