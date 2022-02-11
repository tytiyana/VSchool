import React, {useContext} from 'react'
import { QuoteContext } from '../App'


function Quote(props){
    const context = useContext(QuoteContext)
    return(
        <div>
            <h1 id="quote">{context.quote}</h1>
        </div>
    )
}

export default Quote