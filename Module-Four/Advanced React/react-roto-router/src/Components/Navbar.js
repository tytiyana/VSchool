import React from 'react'
import {Link, Switch, Route} from "react-router-dom"

function Navbar(){
    return(
        <>
            <nav>
                <li><Link className="link" exact to="/">Home</Link></li>
                <li><Link className="link" to="/about">About</Link></li>
                <li><Link className="link" to="/services">Services</Link></li>
            </nav>
        </>
    )
}

export default Navbar