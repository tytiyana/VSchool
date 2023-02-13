import React, {useState,useEffect} from 'react'
import axios from "axios"
import {Link, Switch, Route} from "react-router-dom"
  
import Metals from './components/Metals'
import Mineral from './components/Minerals'
import Gemstone from './components/Gemstones'
import AddMetalForm from './components/AddMetalForm'
import AddMineralsForm from './components/AddMineralsForm'
import AddGemstoneForm from './components/AddGemstoneForm'

function App(){
    const [metals, setMetals] =useState([])
    const [minerals, setMinerals] = useState([])
    const [gemstones, setGemstones] = useState([])
    
    function getAll(){
        axios.get("/metals")
            .then(res => setMetals(res.data))
            .catch(err => console.log(err))

        axios.get("/minerals")
            .then(res => setMinerals(res.data))
            .catch(err => console.log(err))

        axios.get("gemstones")
            .then(res => setGemstones(res.data))
            .catch(err => console.log(err))
    }

//* Metals //
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


//! Minerals //
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


//? Gemstones //
    function addGemstones(newGemstones){
        axios.post("/gemstones", newGemstones)
        .then(res => setGemstones(prevGemstones => [...prevGemstones, res.data]))
        .catch(err => console.log(err))
    }

    function deleteGemstones(gemstoneId){
        axios.delete(`/gemstones/${gemstoneId}`)
            .then(res => setGemstones(prevGemstones => prevGemstones.filter(gemstone => gemstone._id !== gemstoneId)))
            .catch(err => console.log(err))
    }

    function editGemstones(updatedObject, gemstoneId){
        axios.put(`/gemstones/${gemstoneId}`, updatedObject)
            .then(res => setGemstones(prevGemstones => prevGemstones.map(gemstone => gemstone._id !== gemstoneId ? gemstone : res.data)))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getAll()
    }, [])

    return(
        <div>
          <h3>Metals:</h3>
          <AddMetalForm/>
          <h3>Minerals:</h3> 
          <AddMineralsForm/>
          <h3>Gemstones:</h3>
          <AddGemstoneForm/>
            {metals.map(metal => <Metals {...metal} delete={deleteMetals} edit={editMetals} key={metals._id}/>)}
            {minerals.map(mineral => <Mineral {...mineral} delete={deleteMinerals} edit={editMinerals} key={minerals._id}/>)}
            {gemstones.map(gemstone => <Gemstone {...gemstone} delete={deleteGemstones} edit={editGemstones} key={gemstones._id} />)}
        </div>
    )
}

export default App
   


