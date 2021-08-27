import React from 'react'
import Form from "./Form"
import { Consumer } from './provider'



function App(props){
    return(
        <Consumer>
            {context => (
                <>
                <Form/>
                {context.uglyThingItem}
                </>
                )
            }
        </Consumer>
    )
}

export default App