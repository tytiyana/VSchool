import React, {useState, useContext} from 'react'
import AddMetalForm from "./forms/AddMetalForm"
import { UserContext } from '../context/UserProvider'

function Metals(props){
    const {name, rarity, yearDiscovered, meltingPoint, description, _id} = props
    const {deleteMetals, editMetals} = useContext(UserContext)
    const [editToggle, setEditToggle] = useState(false)
    return(
        <div>
            { ! editToggle ?
            <>
            <h1>Name: {name}</h1>
            <h3>Rarity: {rarity}</h3>
            <h3>Year Discovered: {yearDiscovered}</h3>
            <h3>Melting Point: {meltingPoint}</h3>
            <h3>Description: {description}</h3>

            <button onClick={() => deleteMetals(_id)}>Delete</button>
            <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
            </>
            :
            <>
            <AddMetalForm
                name={name}
                rarity={rarity}
                yearDiscovered={yearDiscovered}
                meltingPoint={meltingPoint}
                description={description}
                _id={_id}
                buttonText="Submit"
                submit={editMetals}
                /> 
                <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
            </>
            }
        </div>
    )
}

export default Metals