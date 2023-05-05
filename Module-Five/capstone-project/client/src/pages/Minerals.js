import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Mineral from '../components/Minerals'
import AddMineralsForm from '../components/AddMineralsForm'

function MineralPage(props) {
    const {minerals, getUserMinerals, addMinerals, deleteMinerals, editMinerals} = props

    useEffect(() => {
        getUserMinerals()
    }, [])

    
    return(
        <div>
            <h3>Minerals:</h3> 
            <AddMineralsForm submit={addMinerals} buttonText="Add Mineral"/>
            {minerals.map(mineral => <Mineral {...mineral} delete={deleteMinerals} edit={editMinerals} key={minerals._id}/>)}
        </div>
    )
}


export default MineralPage