import React, {useState, useContext} from 'react'

import { UserContext } from '../context/UserProvider'
import AddGemstoneForm from '../components/forms/AddGemstoneForm'

export default function Gemstone(props){
    const {name, rarity, yearDiscovered, color, mohsHardness, description, _id} = props
    const {deleteGemstones, editGemstones} = useContext(UserContext)
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

            <button onClick={() => deleteGemstones(_id)}>Delete</button>
            <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
            </>
            :
            <>
            <AddGemstoneForm
                name={name}
                rarity={rarity}
                yearDiscovered={yearDiscovered}
                color={color}
                mohsHardness={mohsHardness}
                description={description}
                _id={_id}
                buttonText="Submit Edit"
                submit={editGemstones}
                /> 
                <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
            </>
            }
        </div>
    )
}