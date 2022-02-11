import React from 'react'

function UglyThing(props){
    return(
            <div className="uglyThing">
                <div className="details">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                </div>
                <img src={props.imgUrl}  alt={props.title}/>
                <div className="buttons">
                <button onClick={() => props.edit(props.id)}>Edit</button>
                <button onClick={()=> props.delete(props.id)}>Delete</button>
                </div>
                <div id={props.id}></div>
            </div>
    )
}

export default UglyThing