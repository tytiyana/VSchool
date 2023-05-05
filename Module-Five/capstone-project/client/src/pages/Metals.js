import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Metals from '../components/Metals'
import AddMetalForm from '../components/forms/AddMetalForm'

function MetalPage (props) {
    const {metals, getUserMetals, addMetals, deleteMetals, editMetals} = props

    useEffect(() => {
        getUserMetals()
    }, [])


    return(
        <div>
            <h3>Metals:</h3>
            <AddMetalForm submit={addMetals} buttonText="Add Metal" />
            {metals.map(metal => <Metals {...metal} delete={deleteMetals} edit={editMetals} submit={addMetals} key={metals._id}/>)}
        </div>
    )
}


export default MetalPage