import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Mineral from '../components/Minerals'
import AddMineralsForm from '../components/AddMineralsForm'

function MineralPage() {
    const [minerals, setMinerals] = useState([])

    function getMinerals(){
        axios.get("/minerals")
        .then(res => setMinerals(res.data))
        .catch(err => console.log(err))
    }

    function addMinerals(newMinerals){
        axios.post("/minerals", newMinerals)
        .then(res => setMinerals(prevMinerals => [...prevMinerals, res.data]))
        .catch(err => console.log(err))
    }


    function deleteMinerals(mineralId){
        axios.delete(`/minerals/${mineralId}`)
            .then(res => setMinerals(prevMinerals => prevMinerals.filter(mineral => mineral._id !== mineralId)))
            .catch(err => console.log(err))
    }

    function editMinerals(updatedObject, mineralId){
        axios.put(`/minerals/${mineralId}`, updatedObject)
            .then(res => setMinerals(prevMinerals => prevMinerals.map(mineral => mineral._id !== mineralId ? mineral : res.data)))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getMinerals()
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