import React from "react";
import './style.css';
import {BsInfoCircleFill} from 'react-icons'
import PageHeaderContent from "../../Components/PageHeaderContent";
import {Animate, AnimateKeyframes } from "react-simple-animate";

const Contact=()=>{
    return(
<section id="contact" className="conatct">
        <PageHeaderContent
        headertext = "Contact me"
        icon={<BsInfoCircleFill size={40}/>}
        />
        <div className="contact-content">
            <Animate
            play
            duration={1}
            delay={0}
            start={{
                transform : "translateX(-200px)"
            }}
            end={{
                transform: "translateX(0px)",
            }}
            >
                <h3 className="contact-content-header-text">
                    Let's Talk

                </h3>

            </Animate>
            <Animate
            play
            duration={1}
            delay={0}
            start={{
                transform : "translateX(200px)"
            }}
            end={{
                transform: "translateX(0px)"
            }}
            >
                <div className="contact-content-form">
                    <div className="contact-content-form-controlwrapper">
                        <div>
                            <input name="name"  className="inputName"   type={'text'}/>
                            <label htmlFor="name" className="nameLabel">Name</label>
                        </div>
                        <div >
                        <input email="email"  className="inputEmail"  type={'text'}/>
                            <label htmlFor="email" className="EmailLabel">Email</label>
                        </div>
                        <div>
                            <textarea 
                            required
                            name="Description"
                            className="inputDescription"
                            typeof={"text"}
                            rows="5"
                            ></textarea>
                      
                        
                            <label  htmlFor="Description" className="DescriptionLabel">Your Message
                            </label>
                        </div>
                    </div>
                    </div>
                    <button className="sub-btn">Submit</button>
                    </Animate>
            
        
        </div>
    </section>
    )
}

export default Contact;