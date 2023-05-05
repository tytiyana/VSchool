import React from 'react'
import Mineral from '../components/Minerals'

export default function MineralList (props) {
    const {minerals} = props
    return(
        <div>
             {minerals.map(mineral => <Mineral {...mineral} key={minerals._id}/>)}
        </div>
    )
}