import React from 'react'

function List (props){
    return(
        <div>
            <ul>
            <li>{props.listItem}</li>
            </ul>
        </div>
    )
}

export default List