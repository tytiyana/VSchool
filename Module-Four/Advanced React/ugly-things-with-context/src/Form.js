import React from 'react'

import { Consumer } from './provider'

function Form(props){
    return(
        <Consumer>
            {context => (
                <>
                <form id="form">
                <input
                    type="text"
                    name="imgUrl"
                    placeholder="imgUrl"       
                    value={context.imgUrl}
                    onChange={context.handleChange}
            />
                <input
                    type="text"
                    name="title"
                    placeholder="title"        
                    value={context.title}
                    onChange={context.handleChange}
                />
                <input
                    type="text"
                    name="description"
                    placeholder="description"
                    value={context.description}
                    onChange={context.handleChange}
                />
                <button onClick={context.handleSubmit}>Submit</button>
            </form>
                </>
            )}
        </Consumer>
    )
}

export default Form