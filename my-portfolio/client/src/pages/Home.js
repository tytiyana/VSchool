import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {
    return(
        <div>
            <Header/>
                <div id='name-center'>
                    <h1 id='name'>Tytiyana Norris</h1>                
                </div>
                <div id='title-center'>
                <h3 id='job-title'>Software Developer</h3>
                </div>
            <Footer/>
        </div>
    )
}

export default Home