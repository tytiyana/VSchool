import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Gemstone from '../components/Gemstones'
import AddGemstoneForm from '../components/AddGemstoneForm'

function GemstonePage () {
    const [gemstones, setGemstones] = useState([])

    function getGemstones(){
        axios.get("gemstones")
        .then(res => setGemstones(res.data))
        .catch(err => console.log(err))
    }

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
        getGemstones()
    }, [])

    return(
        <div>
            <h3>Gemstones:</h3>
            <AddGemstoneForm submit={addGemstones} buttonText="Add Gemstone"/>
             {gemstones.map(gemstone => <Gemstone {...gemstone} delete={deleteGemstones} edit={editGemstones} submit={addGemstones} key={gemstones._id}/>)}
        </div>
    )
}


export default GemstonePage