import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Metals from '../components/Metals'
import Mineral from '../components/Minerals'
import Gemstone from '../components/Gemstones'

function Home() {
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

    useEffect(() => {
        getAll()
    }, [])
    
    return(
        <div>
            <h1>Precious Metal, Mineral, and Gemstone Directory</h1>
            {metals.map(metal => <Metals {...metal} key={metals._id} />)}
            {minerals.map(mineral => <Mineral {...mineral} key={minerals._id}/>)}
            {gemstones.map(gemstone => <Gemstone {...gemstone}key={gemstones._id} />)}
        </div>
    )
}


export default Home