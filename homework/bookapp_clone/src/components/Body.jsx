import React from "react";
import Stars from "./Stars";
import {RiMapPinLine, RiCircleFill, RiCheckboxLine} from '@remixicon/react';

import ProfileImg from "../img/profile.png";
import CardSlider from "./CardSlider";

class Body extends React.Component {
    render() {
        return (
            <div className="main_body">
                <div className="top">
                    <div className="left">
                        <p className="gray_text">Barber Services</p>
                        <h1>Men's Haircuts And Hair styles</h1>
                        <p className="gray_text"><RiMapPinLine size={15}/> Tokyo city tower, Road No: 1280, Housing Apartment, Japan</p>
                    </div>
                    <div className="right">
                        <p>$150 <span className="gray_text">$200</span></p>
                        <div className="profile">
                            <img src={ProfileImg} width={50} style={{borderRadius:50}}/>
                            <div className="details">
                                <p>By Jonathan Doe</p>
                                <Stars count={4} rating={4.5} size={15}/>
                            </div>
                        </div>
                    </div>
                </div>

                <br />
                <br />
                <h2>Service Description</h2>

                <br />
                <p className="gray_text">
                Get Barbers at your doorstep now on your demand as per your required time and date.
                Trim your regular hairstyle or get a new look with a new style from the catalog.
                Even if you are too busy in the office and have a meeting to attend, why not get
                the job done in the office itself!! Choose a regular scissor cut or ask for a trimmer cut, any style you want is just a tap away.
                </p>

                <br />
                <br />
                <p className="gray_text">
                Praesent lectus facilisi tempor ridiculus arcu pharetra non tellus.
                Torquent nisl tempori amader Magnis mollis lobortis nam, montes ut, consequat sed amet nullam. 
                </p>

                <br />
                <br />
                <h2>Service Description</h2>
                <div className="li_el">
                    <RiCircleFill size={10}/>
                    <p>Service Booking:</p>
                    <p className="gray_text">3 hours before service delivery</p>
                </div>
                <div className="li_el">
                    <RiCircleFill size={10}/>
                    <p>Service Duration:</p>
                    <p className="gray_text">40 minutes (can be extended up to 10 minutes) </p>
                </div>
                <div className="li_el">
                    <RiCircleFill size={10}/>
                    <p>Service Availability:</p>
                    <p className="gray_text">9 Am to 7 pm</p>
                </div>

                <br />
                <br />
                <h2>Service Features</h2>
                <div className="service_features">
                    <div className="feature">
                        <RiCheckboxLine size={20}/>
                        <p className="gray_text">100% Secure Services</p>
                    </div>
                    <div className="feature">
                        <RiCheckboxLine size={20}/>
                        <p className="gray_text">Covid 19 Safety</p>
                    </div>
                    <div className="feature">
                        <RiCheckboxLine size={20}/>
                        <p className="gray_text">Easy Payment Method</p>
                    </div>
                    <div className="feature">
                        <RiCheckboxLine size={20}/>
                        <p className="gray_text">Services Quality Ensure</p>
                    </div>
                </div>

                <br />
                <br />

                <CardSlider />

            </div>
        );
    }
}

export default Body;