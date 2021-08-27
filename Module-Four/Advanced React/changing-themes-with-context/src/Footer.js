import React from 'react'
import { ThemeContextConsumer } from './themeContextCosumer'

function Footer(props){
    return(
        <ThemeContextConsumer>
            {context => (
                <h3 className={`${context.theme}-theme`}>Changing themes with Context</h3>
            )}
    </ThemeContextConsumer>
    )
}

export default Footer