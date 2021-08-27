import React, {useContext} from 'react'
import Form from './Form'
import {UglyContext} from './UglyContext'

export default function App() {
    
    const { handleSubmit, handleChange, uglyThings, deleteFunc, toggleEdit, editFunc} = useContext(UglyContext)
    const {completedUglyThings} = uglyThings


    const mappedUglyThings = completedUglyThings.map(uglyThingCompleted => {
        return (
            uglyThingCompleted.isEditing === false ?
            <div>
                <h2>{uglyThingCompleted.title}</h2>
                <h2>{uglyThingCompleted.description}</h2>
                <img src={uglyThingCompleted.imgUrl} width="200px" height="200px" alt="imgurl" />
                <button onClick={() => deleteFunc(uglyThingCompleted._id)}> Delete</button>
                <button onClick={() => toggleEdit(uglyThingCompleted._id)} id="last-btn"> Edit</button>

            </div>
            :
            <form onSubmit={ (e) => {
                console.log(e)
                e.preventDefault()
                editFunc(e, uglyThingCompleted._id)
                return toggleEdit(completedUglyThings._id)
            }}>

                <input 
                    type="text" 
                    value={completedUglyThings.editTitle} 
                    name="editTitle" 
                    placeholder="title" 
                    onChange={handleChange} 
                />

                <input 
                    type="text" 
                    value={completedUglyThings.editImgUrl} 
                    name="editImgUrl" 
                    placeholder="imgUrl" 
                    onChange={handleChange} 
                />

                <input id="last-btn"
                    type="text" 
                    value={completedUglyThings.editDescription} 
                    name="editDescription" 
                    placeholder="description" 
                    onChange={handleChange} 
                />
                <button>Submit Edit</button>
            </form>

        )
    })
    return (
        <div id="container">
            <Form value={{handleSubmit, handleChange, uglyThings, deleteFunc, toggleEdit, editFunc}}/>
            {mappedUglyThings}
        </div>
    )
}



