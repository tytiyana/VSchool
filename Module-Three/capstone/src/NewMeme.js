import React from 'react'

function NewMeme(props){
    return(
        <div>
        <h1>{props.topText}</h1>
        <img src={props.url} alt={props.name} width={props.width}></img>
        <h1>{props.bottomText}</h1>
        <h1>{props.name}</h1>
        <button onClick={props.edit}>Edit</button>
        <button onClick={props.delete}>Delete</button>
        </div>
    )
}

export default NewMeme