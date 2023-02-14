import React, {useState} from 'react'

function AddGemstoneForm(props){
    const initInputs = {name: props.name || "", rarity: props.rarity || "", yearDiscovered: props.yearDiscovered || "", color: props.color || "", mohsHardness: props.mohsHardness || "", description: props.description || ""}
    const [inputs, setInputs] = useState(initInputs)
    
    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name='name'
                value={inputs.name}
                onChange={handleChange}
                placeholder="name"
            />
             <input
                type="text"
                name='rarity'
                value={inputs.rarity}
                onChange={handleChange}
                placeholder="rarity"
            />
             <input
                type="text"
                name='yearDiscovered'
                value={inputs.yearDiscovered}
                onChange={handleChange}
                placeholder="year discovered"
            />
             <input
                type="text"
                name='color'
                value={inputs.color}
                onChange={handleChange}
                placeholder="color"
            />
             <input
                type="text"
                name='mohsHardness'
                value={inputs.mohsHardness}
                onChange={handleChange}
                placeholder="mohs hardness"
            />
             <input
                type="text"
                name='description'
                value={inputs.description}
                onChange={handleChange}
                placeholder="description"
            />
                <button>{props.buttonText}</button>
        </form>
    )
}

export default AddGemstoneForm