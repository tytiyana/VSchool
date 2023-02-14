import React, {useState} from 'react'
import AddMetalForm from "../components/AddMetalForm"

function Metals(props){
    const {name, rarity, yearDiscovered, meltingPoint, description, _id} = props
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

            <button onClick={() => props.delete(_id)}>Delete</button>
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
                submit={props.edit}
                /> 
                <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
            </>
            }
        </div>
    )
}

export default Metals