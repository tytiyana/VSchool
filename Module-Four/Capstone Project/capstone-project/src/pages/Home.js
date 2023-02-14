import React from 'react'

function Home (){

    return(
        <div id="home">
            <h1>Welcome to Kanye's Mind</h1>
            <h6>Gain insight into what it's like in the mind of a biliionare, fashion icon. </h6>
            <button onClick={event =>  window.location.href='/quote'}>Enter</button>
        </div>
    )
}

export default Home