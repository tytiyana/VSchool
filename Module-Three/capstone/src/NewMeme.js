import React from 'react'

function NewMeme(props){
    return(
        <div>
        <h1>{props.topText || props.newTopText}</h1>
        <img src={props.url} alt={props.name} width={props.width}></img>
        <h1>{props.bottomText || props.newBottomText}</h1>
        <h1>{props.name}</h1>
        <button onClick={props.edit}>Edit</button>
        <button onClick={props.delete}>Delete</button>
        <div id="newInputs"></div>
        </div>
    )
}

export default NewMeme