import React, { useState, useEffect } from 'react'
import {Link, Switch, Route} from "react-router-dom"
import axios from "axios"
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Quote from './pages/Quote'

const QuoteContext = React.createContext(null)

export default function App(props){


   const [quote, setQuote] = useState("")

   useEffect(() => {
        axios.get(`https://api.kanye.rest`)
         .then(res => setQuote(res.data))
         .catch(err => console.log(err))
   }, [])


    return(
        <QuoteContext.Provider value ={quote}>
            <nav>
                <Link className="navbar" to="/"><h3>Home</h3></Link> 
                <Link className="navbar" to="/quote"><h3>Kanye Quotes</h3></Link>
                <Link className="navbar" to="/about"><h3>About</h3></Link>
            </nav>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/quote">
                    <Quote/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
            </Switch>
            <Footer/>
        </QuoteContext.Provider>
    )
}

export {QuoteContext}