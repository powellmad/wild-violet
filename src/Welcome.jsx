import './Welcome.css';
import React from "react"
import image from "./images/lauren.JPG"

function Welcome() {
    return (
        <div className="welcome">
            <h1>Hi! I'm glad you're here.</h1>
            <img className="headshot" src={image} alt="headshot of lauren wearing pink rim glasses in a green sweater"/>
        </div>
    )
};

export default Welcome;