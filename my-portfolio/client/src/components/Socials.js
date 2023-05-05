import React from 'react'

function SocialBar() {
    return(
        <div id='socialsBar' className='socials'>
            <ul>
                <li>
                    <a href='https://github.com/tytiyana'>
                        <img src="https://i.ibb.co/J55xJsS/github.png" alt="github" height={50} width={50}/>
                    </a>
                </li>
                <li>
                    <a href='.'>
                        <img src="https://i.ibb.co/HKBYKfm/twitter.png" alt="twitter" height={50} width={50} />
                    </a>
                </li>
                <li>
                    <a href='https://www.instagram.com/tytiyanadn/'>
                        <img src="https://i.ibb.co/pQf9Trf/instagram.png" alt="instagram" height={50} width={50} />
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/tytiyana-norris-775641210/'>
                        <img src="https://i.ibb.co/Sx3Mg8L/linkedin.png" alt="linkedin" height={50} width={50} />
                    </a>
                </li>
            </ul>
                 <a id='contact' href='.'>
                    <img src="https://i.ibb.co/f1JXvzH/contact.png" alt="contact" height={50} width={50} />
                </a>  
        </div>
    )
}

export default SocialBar