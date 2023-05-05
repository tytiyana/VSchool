import React from 'react'
import SocialBar from '../components/Socials'
import Header from '../components/Header'

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
            <SocialBar/>
        </div>
    )
}

export default Home