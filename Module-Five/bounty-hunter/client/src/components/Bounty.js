import React, {useState} from 'react'
import AddBountyForm from '../AddBountyForm'

export default function Bounty(props){
    const {firstName, lastName, living, type, bountyAmount,_id} = props
    const [editToggle, setEditToggle] = useState(false)
    return(
        <div>
            
            { ! editToggle ?
            <>
            <h1>{firstName} {lastName}</h1>
            <h3>Alive? {living}</h3>
            <h3>{type}</h3>
            <h3>{bountyAmount}</h3>
            <button onClick={() => props.delete(_id)}>Delete</button>
            <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
            </>
            :
            <>
            <AddBountyForm
                firstName={firstName}
                lastName={lastName}
                living={living}
                bountyAmount={bountyAmount}
                type={type}
                _id={_id}
                submit={props.edit}
                /> 
                <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
            </>
            }
        </div>
    )
}