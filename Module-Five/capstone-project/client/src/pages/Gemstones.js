import React, {useEffect} from 'react'
import Gemstone from '../components/Gemstones'
import AddGemstoneForm from '../components/forms/AddGemstoneForm'

function GemstonePage (props) {
    const {gemstones, getUserGemstones, addGemstones, deleteGemstones, editGemstones} = props

    
    useEffect(() => {
        getUserGemstones()
    }, [])

    return(
        <div>
            <h3>Gemstones:</h3>
            <AddGemstoneForm submit={addGemstones}/>
             {gemstones.map(gemstone => <Gemstone {...gemstone} delete={deleteGemstones} edit={editGemstones} submit={addGemstones} key={gemstones._id}/>)}
        </div>
    )
}


export default GemstonePage