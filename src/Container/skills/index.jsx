import React from "react";
import{Line} from 'rc-progress';
import './style.css';
import {BsInfoCircleFill} from 'react-icons/bs'
import PageHeaderContent from "../../Components/PageHeaderContent";
import {Animate, AnimateKeyframes } from "react-simple-animate";
import {skillsData} from "./util";

const Skills=()=>{
    return(
        <section id="skills" className="skills">
        <PageHeaderContent
        headertext = "My Skills"
        icon={<BsInfoCircleFill size={40}/>}
        />
        <div className="skills-content">
            {
                skillsData.map((item,i)=>
                (
                    <div key={i} className="inner-content">
                       <Animate
            play
            duration={1}
            delay={0.3}
            start={{
                transform: 'translateX(-200px)'
            }} 
            end={{
                transform: 'translatex(0px)'
            }} 
            >
                <h3 className="category-text">{item.label}</h3>
                <div className="d">
                    {
                        item.data.map((skillItem,j)=>(
                            <AnimateKeyframes
                            play
                            duration={1}
                            keyframes={["opacity:1","opacity:0"]}
                            iterationCount="1"     
                            >
                                <div className="progress-wrapper" key={j}>
                                    <p className="p">{skillItem.skillName}</p>
                                    <Line
                                    percent={skillItem.percentage}
                                    strokeWidth={"2"}
                                  
                                    strokeColor="var(--yellow-theme-main-color)"
                                    trailWidth={"2"}
                                    strokeLinecap="square"
                                    ></Line>

                                </div>
                            </AnimateKeyframes>                 
                              ))
                    }
                </div>
            </Animate>
            </div>
                ))
            }
        </div>
    </section>
    
    )
}

export default Skills;