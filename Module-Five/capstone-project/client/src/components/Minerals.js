import React, {useState} from 'react'
import AddMineralsForm from './AddMineralsForm'

function Mineral(props){
    const {name, rarity, yearDiscovered, color, mohsHardness, description, _id, edit} = props
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

            <button onClick={() => props.delete(_id)}>Delete</button>
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
                submit={edit}
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