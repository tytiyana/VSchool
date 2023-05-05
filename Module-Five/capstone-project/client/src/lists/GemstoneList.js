import React from 'react'
import Gemstone from '../components/Gemstones'

export default function GemstoneList (props) {
    const {gemstones} = props
    return(
        <div>
             {gemstones.map(gemstone => <Gemstone {...gemstone} key={gemstones._id}/>)}
        </div>
    )
}


