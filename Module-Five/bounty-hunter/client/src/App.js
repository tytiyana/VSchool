import React, {useState, useEffect} from 'react'
import axios from "axios"
import Bounty from './components/Bounty'
import AddBountyForm from './AddBountyForm'

export default function App(){
    const [bounties, setBounties] = useState([])

    function getBounties(){
        axios.get("/bounty")
        .then(res => setBounties(res.data))
        .catch(err => console.log(err))
    }

    function addBounties(newBounty){
        axios.post("/bounty", newBounty)
        .then(res => setBounties(prevBounties => [...prevBounties, res.data]))
        .catch(err => console.log(err))
    }

    function deleteBounties(bountyId){
        axios.delete(`/bounty/${bountyId}`)
            .then(res => setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId)))
            .catch(err => console.log(err))
    }

    function editBounties(updatedObject, bountyId){
        axios.put(`/bounty/${bountyId}`, updatedObject)
            .then(res => setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data) ) )
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getBounties()
    }, [])
    return(
        <div>
            <AddBountyForm submit={addBounties} btnText="Add Movie"/>
            {bounties.map(bounty => <Bounty {...bounty} delete={deleteBounties} edit={editBounties } key={bounties._id}/>)}
        </div>
    )
}