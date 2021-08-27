import React from "react"
import ReactDom from "react-dom"
import App from "./App"
import {UglyThingProvider} from "./UglyContext"

ReactDom.render(  
    <UglyThingProvider>
        <App/>
    </UglyThingProvider> ,
    document.querySelector("#root")
)