import React from 'react'
import { ThemeContextConsumer } from './themeContextCosumer'

function Navbar(props){
    return(
        <ThemeContextConsumer>
        {context => (
            <ul className={`${context.theme}-theme`}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        )}
    </ThemeContextConsumer>
    )
}

export default Navbar