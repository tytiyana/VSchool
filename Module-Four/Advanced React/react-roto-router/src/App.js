import React from 'react'
import "./styles.css"
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Services from './Pages/Services'
import About from './Pages/About'
import Footer from './Components/Footer'
import {Link, Switch, Route} from "react-router-dom"

function App (){
    return(
        <div>
            <Navbar/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/services">
                        <Services/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                </Switch>
            <Footer/>
        </div>
    )
}

export default App