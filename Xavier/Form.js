import React, { useContext } from 'react'

import { UglyContext } from './UglyContext'

function Form() {

    const { handleSubmit, handleChange, uglyThings} = useContext(UglyContext)
    const {title, imgUrl, description} = uglyThings

    
    return (
        <form onSubmit={handleSubmit}>

            <input 
                type="text" 
                value={title} 
                name="title" 
                placeholder="title" 
                onChange={handleChange} 
            />

            <input 
                type="text" 
                value={imgUrl} 
                name="imgUrl" 
                placeholder="imgUrl" 
                onChange={handleChange} 
            />

            <input id="last-btn"
                type="text" 
                value={description} 
                name="description" 
                placeholder="description" 
                onChange={handleChange} 
            />
            <button>Press</button>
        </form>
    )
}

export default Form
