import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Metals from '../components/Metals'
import AddMetalForm from '../components/AddMetalForm'

function MetalPage () {
    const [metals, setMetals] =useState([])

    function getMetals(){
        axios.get("/metals")
            .then(res => setMetals(res.data))
            .catch(err => console.log(err))
    }

    function addMetals(newMetals){
        axios.post("/metals", newMetals)
        .then(res => setMetals(prevMetals => [...prevMetals, res.data]))
        .catch(err => console.log(err))
    }

    function deleteMetals(metalId){
        axios.delete(`/metals/${metalId}`)
            .then(res => setMetals(prevMetals => prevMetals.filter(metal => metal._id !== metalId)))
            .catch(err => console.log(err))
    }

    function editMetals(updatedObject, metalId){
        axios.put(`/metals/${metalId}`, updatedObject)
            .then(res => setMetals(prevMetals => prevMetals.map(metal => metal._id !== metalId ? metal : res.data)))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getMetals()
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