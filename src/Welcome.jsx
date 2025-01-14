import './Welcome.css';
import React from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import image from "./images/lauren.JPG"

function Welcome() {
    return (
        <div>
            <Navbar />
            <section className="welcome">
                <h1>Hi! I'm glad you're here.</h1>
                <img className="headshot" src={image} alt="headshot of lauren wearing pink rim glasses in a green sweater"/>
            </section>
            <Footer />
        </div>
    )
};

export default Welcome;