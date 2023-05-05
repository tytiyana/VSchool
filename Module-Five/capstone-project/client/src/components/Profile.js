import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserProvider.js'

import GemstoneList from '../lists/GemstoneList.js'
import AddGemstoneForm from './forms/AddGemstoneForm.js'

import MineralList from '../lists/MineralList.js'
import AddMineralForm from './forms/AddMineralsForm.js'

import MetalList from '../lists/MetalList.js'
import AddMetalForm from './forms/AddMetalForm.js'




export default function Profile(props){
  const { 
    user: { 
      username
    },
    gemstones,
    addGemstones,
    editGemstones,
    getUserGemstones,
    minerals,
    addMinerals,
    editMinerals,
    getUserMinerals,
    metals,
    addMetals,
    editMetals,
    getUserMetals
  } = useContext(UserContext)

  useEffect(() => {
    getUserMetals()
    getUserMinerals()
    getUserGemstones()
  },[])
 
  return (
    <div className="profile">
      <h1>Welcome @{username}!</h1> 
      <h3>Add A Gemstone</h3>
      <AddGemstoneForm submit={addGemstones} editGemstones={editGemstones}/>
      <GemstoneList gemstones={gemstones}/>
      <AddMineralForm submit={addMinerals} editMinerals={editMinerals}/>
      <MineralList minerals={minerals}/>
      <AddMetalForm submit={addMetals} editMetals={editMetals}/>
      <MetalList metals={metals}/>
    </div>
  )
}