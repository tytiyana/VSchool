import React, { Component } from 'react'
import Button from './Button'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'
import { ThemeContextConsumer } from './themeContextCosumer'


function App (){
    return(
        <ThemeContextConsumer>
             {context => (
                  <div className={`${context.theme}-theme`}>
                        <Navbar/>
                        <Header/>
                        <Button/>
                        <Footer/>
                 </div>
            )}
        </ThemeContextConsumer>
    )
}

export default App