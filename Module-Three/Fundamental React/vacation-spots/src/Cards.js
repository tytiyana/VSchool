import React from "react"

function Card(props) {
    return(
        <div>
            <h3>{props.place}</h3>
            <p>{`$${props.price}`}</p>
            <p>{props.timeToGo}</p>
            <hr></hr>
      </div>
    )
}

export default Card