import React from 'react'
import me from './me.jpg'

const Home = () => {
    return (
        <div class="home">
            <h1>About Me</h1>
            <img src={me} height="250" width="250"/>
            <p>
                I'm an undergrad student, about to complete the second year of my college. 
                
                I delved into application and web development out of curiosity and because I like making new things. 
                
                Over the course of these two years I've tried to meddle with various frameworks and platforms like Native Android, Flutter, React, MERN etc. 
            </p>
        </div>
    )
}

export default Home
