import React from 'react'

function Header() {
    return(
        <div>
            <header>
                <nav id='navbar'>
                    <ul id='nav-items'>
                        <li>
                            <a id='logo' href='/'>
                                <img src='https://i.ibb.co/ZYDv5MG/logo.png' alt='logo' height={150} width={150}/>
                            </a>
                        </li>
                        <li className='nav-items' id='about'>
                            <a href='/about'>About</a>
                        </li>
                        <li className='nav-items'>
                            <a href='/experience'>Experience</a>
                        </li>
                        <li className='nav-items'>
                            <a href='/projects'>Projects</a>
                        </li>
                        <li className='nav-items'>
                            <a href='//'>Resume</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header