import React, {useState} from 'react'

function AddMetalForm(props){
    const initInputs = {
        name: props.name || "",
        rarity: props.rarity || "",
        yearDiscovered: props.yearDiscovered || "",
        meltingPoint: props.meltingPoint || "",
        description: props.description || ""
    }
    
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
                name='meltingPoint'
                value={inputs.meltingPoint}
                onChange={handleChange}
                placeholder="meltingPoint"
            />
             <input
                type="text"
                name='description'
                value={inputs.description}
                onChange={handleChange}
                placeholder="description"
            />
                <button>Add Metal</button>
        </form>
    )
}

export default AddMetalForm