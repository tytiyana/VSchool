import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

function About() {
    return(
        <div>
            <Header/>
                <div id='about'>
                    <img id='photo-of-me' src='https://i.ibb.co/2KKNrxM/image.png' alt='tytiyana'/>
                        <div id='about-box'>
                            <h1 id='about-title'>About Me</h1>
                            <hr></hr>
                            <p className='about-me'>Hey! My name is Tytiyana and I enjoy creating all kinds of things. I've been into developing since about 2010 and I've been able to turn my budding interest into a career.</p>
                            <p className='about-me'>I'm detail-oriented, curious, eager to learn, an driven. I pour into my projects and love challenging myself and others.</p>
                            <p className='about-me'>In my spare time, I enjoy gaming, doing some freelance work, and traveling. I'm also fearning Swift.</p>
                        </div>
                </div>
            <Footer/>
        </div>
    )
}

export default About