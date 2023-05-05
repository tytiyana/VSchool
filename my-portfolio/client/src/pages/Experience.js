import React from 'react'
import SocialBar from '../components/Socials'
import Header from '../components/Header'

function Experience() {
    return(
        <div>
                <Header/>
                <h1 id='experience'>Experience</h1>
                <h6 id='title'>Full Stack Software Engineer @ Artless Studios</h6>
                <h6 id='date'>April 2020-Now</h6>
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
                <img src='https://i.ibb.co/7WXTwVX/skills.png' alt='skills'/>
            <SocialBar/>            
        </div>
    )
}

export default Experience