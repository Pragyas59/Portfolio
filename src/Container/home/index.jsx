import React from "react";
import './style.css';
import { useNavigate } from "react-router-dom";
import myImage from './image.png';
import {Animate} from 'react-simple-animate'

const Home = () => {
    const navigate =useNavigate();
    
    const handleNavigateToConatctMePage=()=>{
   navigate("./contact")
    }
    return (
        <section id="home" className="home">
              <div className="image-container">
                <img src={myImage} alt="My Image" className="my-image" /> </div>
            <div className="home-text-wrapper">
                <h1 className="h">
                    Hey... I'm Pragya,
                    <br />
                    A Full stack developer
                </h1>
               
            </div>
            <Animate
            play
            duration={1.8}
            delay={1}
            start={{
                transform: 'translateY(550px)'
            }} 
            end={{
                transform: 'translatex(0px)'
            }}
            >
            <div className="conatct-me">
                <button onClick={handleNavigateToConatctMePage}>Hire Me</button>
            </div>
            </Animate>
        </section>
    )
}

export default Home;
