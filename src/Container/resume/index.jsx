import React from "react";
import './style.css';
import {BsInfoCircleFill} from 'react-icons/bs'
import PageHeaderContent from "../../Components/PageHeaderContent";
import {VerticalTimeline,VerticalTimelineElement,}from 'react-vertical-timeline-component';
import {data} from './util';
import "react-vertical-timeline-component/style.min.css";
import {MdWork} from 'react-icons/md';
import{MdSchool} from 'react-icons/md'
const Resume=()=>{
    return(
        <section id="resume" className="resume">
        <PageHeaderContent
        headertext = "My Resume"
        icon={<BsInfoCircleFill size={40}/>}
        />
        <div className="timeline">
            <div className="timeline-experience">
                <h3 className="header-text-experience">Experience</h3>
                <VerticalTimeline  layout={'1-column'}
                lineColor="var(--yellow-theme-main-color)">
            {
                data.experience.map((item,i)=>(
                    <VerticalTimelineElement key={i}
                    className="timeline-experience-vertical-timeline" 
                    contentStyle={{
                        background:'none',
                        color: 'var( --yellow-theme-sub-text-color)',
                        border:'1.5px solid var(--yellow-theme-main-color)'
                    }}
                
                    icon={<MdWork/>}
                    iconStyle={{
                        background:'#181818',
                        color: 'var(--yellow-theme-main-color)',

                    }}
                    >

                        <div className="vertical-timeline-wrapper">
                            <h3 className="vertical-timeline-element-title">
                                {item.Title}
                                </h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                {item.subTitle}
                            </h4>
                            
                            </div>
                            <p className="item-exp">{item.description}</p>
                            <p className="date-exp">{item.date}</p>
                  


                    </VerticalTimelineElement>
                ))
            }
                </VerticalTimeline>
            </div>
            <div className="timeline-education">
                <h3 className="header-text-education">
                    Education
                </h3>
                <VerticalTimeline  layout={'1-column'}
                lineColor="var(--yellow-theme-main-color)">
            {
                data.education.map((item,j)=>(
                    <VerticalTimelineElement key={j}
                    className="timeline-education-vertical-timeline"
                    contentStyle={{
                        background:'none',
                        color: 'var( --yellow-theme-sub-text-color)',
                        border:'1.5px solid var(--yellow-theme-main-color)'
                    }}
                    
                    icon={<MdSchool/>}
                    iconStyle={{
                        background:'#181818',
                        color: 'var(--yellow-theme-main-color)',

                    }}
                    >
                        <div className="vertical-timeline-wrapper-education">
                            <h3 className="vertical-timeline-element-title-education">
                                {item.Title}
                                </h3>
                            <h4 className="vertical-timeline-element-subtitle-education">
                                {item.subTitle}
                            </h4>
                            
                            </div>
                            <p className="item">{item.description}</p>
                            <p className="date-edu">{item.date}</p>


                    </VerticalTimelineElement>
                ))
            }
                </VerticalTimeline>
            </div>
            </div>
        

    </section>

    )
}

export default Resume;