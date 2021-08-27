import React from 'react'
import { ThemeContextConsumer } from './themeContextCosumer'

function Header(props){
    return(
        <ThemeContextConsumer>
            {context => (
                <h1 className={`${context.theme}-theme`}>Hello World! This is the {context.theme === "light" ? "Light" : "Dark"} theme</h1>
            )}
        </ThemeContextConsumer>
    )
}

export default Header