import React from "react";
import './style.css';
import {BsInfoCircleFill} from 'react-icons/bs'
import PageHeaderContent from "../../Components/PageHeaderContent";
import {Animate} from 'react-simple-animate';
import{DiApple,DiAndroid} from 'react-icons/di';
import{FaDev ,FaDatabase} from 'react-icons/fa'


const personalDetails=[{
    label : "Name",
    value: ": Pragya",
},
{
    label: "Age",
    value: ": 24",
},
{
    label:"Address",
    value:": Bihar",
},
{
    label:"Email",
    value:": pragyas375@gamil.com",
},
{
label:"Phone No",
value:": +9165632146545"
},
];

const jobsummary='As a Full Stack Developer, I am proficient in both front-end and back-end technologies, possessing a comprehensive understanding of web development processes. My responsibilities include designing user interfaces, implementing features, and ensuring seamless integration between server-side logic and client-side components. I excel in utilizing programming languages such as HTML, CSS, JavaScript, and frameworks like React, Angular, for front-end development. On the back end, I am skilled in languages like  Node.js, along with database management using SQL or NoSQL databases. I have experience in creating RESTful APIs, optimizing application performance, and troubleshooting issues across the entire development stack. My role also involves collaborating with cross-functional teams, staying updated with industry trends, and continuously enhancing my technical skills to deliver robust and scalable solutions.'
const About=()=>{
    return(
<section id="about" className="about">
    <PageHeaderContent
    headertext = "About Me"
    icon={<BsInfoCircleFill size={40}/>}
    />
    
    <div className="about-content">
        <div className="about-content-personalwrapper">
            <Animate
            play
            duration={1.8}
            delay={1}
            start={{
                transform: 'translateX(-990px)'
            }} 
            end={{
                transform: 'translatex(0px)'
            }}
            >
        <h3>Full Stack Developer</h3>
        <p className="pp">{jobsummary}</p>
        </Animate>
        <Animate
            play
            duration={1.8}
            delay={1}
            start={{
                transform: 'translateX(500px)'
            }} 
            end={{
                transform: 'translatex(0px)'
            }}
            >
        <h3 className="personalInformationHeader">Personal Information</h3>
        <ul>
            {
                personalDetails.map((item,i)=>(
                <li key={i}>
                    <span className="title">{item.label}</span>
                    <span className="value">{item.value}</span>
                </li>
                ))
            }
        </ul>
        </Animate></div>
        <div className="about-content-servicewrapper"> 
        <Animate
            play
            duration={1.8}
            delay={1}
            start={{
                transform: 'translateX(600px)'
            }} 
            end={{
                transform: 'translatex(0px)'
            }}
            >
        <div className="innercontent">
        <div>
            <FaDev size={60} color="var(--yellow-theme-main-color)"/>

        </div>
        <div>
            <DiAndroid size={60} color="var(--yellow-theme-main-color)"/>

        </div>
        <div>
            <FaDatabase size={60} color="var(--yellow-theme-main-color)"/>

        </div>
        <div>
            <DiApple size={60} color="var(--yellow-theme-main-color)"/>

        </div>
        </div>
        </Animate>
        </div>

    
    </div>
</section>

    )
}

export default About;