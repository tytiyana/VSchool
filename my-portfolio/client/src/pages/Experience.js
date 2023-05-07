import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

function Experience() {
    return(
        <div>
                <Header/>
                    <div id='experience-css'>
                        <div id='experience-box'>
                            <h1 id='experience'>Experience</h1>
                            <hr></hr>                       
                            <h6 id='title'>Full Stack Software Engineer @ Artless Studios</h6>
                            <h6 id='date'>January 2020-Now</h6>
                            <br/>
                            <ul id='experience-list'>
                                <li className='list-items'>
                                • collaborating with management, departments, and customers to identify end-user reguirements and specifications
                                </li>
                                <li className='list-items'>
                                • Designing algorithms and flowcharts to create neus software programs and systems
                                </li>
                                <li className='list-items'>
                                • Producing efficient and elegant code based on reguirements
                                </li>
                                <li className='list-items'>
                                • Testing and deploying programs and applications
                                </li>   
                                <li className='list-items'>
                                • Troubleshooting, debugging, maintaining, and improving existing software
                                </li>
                                <li className='list-items'>
                                • compiling and assessing user feedback to improve software performance
                                </li>
                                <li className='list-items'>
                                • Observing user feedback to recommend improvements to existing software products
                                </li>
                                <li className='list-items'>
                                • Developing technical documentation to guide future software development projects
                                </li>                
                            </ul>
                        </div>
                        <img id='skills' src='https://i.ibb.co/7WXTwVX/skills.png' alt='skills'/>
                    </div>

            <Footer/>            
        </div>
    )
}

export default Experience