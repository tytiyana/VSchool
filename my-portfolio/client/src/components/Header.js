import React from 'react'

function Header() {
    return(
        <div>
            <header>
                <nav id='navbar'>
                    <ul id='nav-items'>
                        <li>
                            <a id='logo' href='/'>
                                <img src='https://i.ibb.co/ZYDv5MG/logo.png' alt='logo'/>
                            </a>
                        </li>
                        <li className='nav-items' id='about'>
                            <a className='a' href='/about'>About</a>
                        </li>
                        <li className='nav-items'>
                            <a className='a' href='/experience'>Experience</a>
                        </li>
                        <li className='nav-items'>
                            <a className='a' href='/projects'>Projects</a>
                        </li>
                        <li className='nav-items' id='resume'>
                            <a className='a' href='https://drive.google.com/file/d/1nTiX0DFiiJ_oD8DOibSCe3FJ5iJEeMbj/view?usp=share_link'>Resume</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header