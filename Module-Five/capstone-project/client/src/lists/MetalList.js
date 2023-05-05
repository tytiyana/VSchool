import React from 'react'
import Metal from '../components/Metals'

export default function MetalList (props) {
    const {metals} = props
    return(
        <div>
             {metals.map(metal => <Metal {...metal} key={metals._id}/>)}
        </div>
    )
}