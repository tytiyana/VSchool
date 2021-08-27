import React from 'react'

function UglyThing(props){
    return(
            <div>
                <p>{props.title || props.newTitle}</p>
                <p>{props.description || props.newDescription}</p>
                <img style={{height: 300, width:200}} src={props.imgUrl || props.newImgUrl}  alt={props.title}/>
                <button onClick={() => props.edit(props.id)}>Edit</button>
                <div id="newInputs"></div>
                <button onClick={()=> props.delete(props.id)}>Delete</button>
            </div>
    )
}

export default UglyThing