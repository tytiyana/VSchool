import React, {useState, useContext} from 'react'
import AddMineralsForm from './forms/AddMineralsForm'
import { UserContext } from '../context/UserProvider'

function Mineral(props){
    const {name, rarity, yearDiscovered, color, mohsHardness, description, _id} = props
    const {deleteMinerals, editMinerals} = useContext(UserContext)
    const [editToggle, setEditToggle] = useState(false)
    return(
        <div>

            { ! editToggle ?
            <>
            <h1>Name: {name}</h1>
            <h3>Rarity: {rarity}</h3>
            <h3>Year Discovered: {yearDiscovered}</h3>
            <h3>Color: {color}</h3>
            <h3>Mohs Hardness: {mohsHardness}</h3>
            <h3>Description: {description}</h3>

            <button onClick={() => deleteMinerals(_id)}>Delete</button>
            <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
            </>
            :
            <>
            <AddMineralsForm
                name={name}
                rarity={rarity}
                yearDiscovered={yearDiscovered}
                color={color}
                mohsHardness={mohsHardness}
                description={description}
                submit={editMinerals}
                buttonText="Submit"
                _id={_id}
                /> 
                <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
            </>
            }
        </div>
    )
}

export default Mineral