import '../styles/Welcome.css';
import React from "react"
import image from "../images/lauren.JPG"
import Navbar from "./Navbar"

function Welcome() {
    return (
        <div>
            <div className="landing">
            <Navbar />
            <section className="welcome">
                <h1 className="h1">Welcome to</h1>
                <h1 className="display">Wild Violet Counseling</h1>
                <h2 className="h3">therapy rooted in flexibility, curiosity and authenticity</h2>
            </section>
            </div>
            <section className="introduction">
                <header className="intro">
                <h2 className="h1">I'm happy you're here.</h2>
                <h3 className="h2">I'm Lauren, a licensed mental health professional working in Tennessee</h3>
                <p>I am a long term, relational therapist who supports people aged 16 and older through the ups and downs of their unique journey. My goal is to collaborate with you to create a safe and constructive environment in order to know the previously unknowable.</p>
                <p>I specialize in anxiety, depression, trauma, identity concerns, and the perinatal time period.  I provide affirming care to members of the LGBTQ+ community. As a lesbian, I share an implicit understanding with those in the queer community. My approach to trauma treatment is gentle and narrative based, while incorporating stabilizing skills and nervous system regulation. </p>
                <button className="button">About Me</button>
                </header>
                <div>
                <img className="headshot" src={image} alt="headshot of lauren wearing pink rim glasses in a green sweater"/>
                </div>            
            </section>
            <section className="services">
                <div className="service-card">
                    <h3>Service</h3>
                    <p>service description</p>
                </div>          
                <div className="service-card">
                    <h3>Service</h3>
                    <p>service description</p>
                </div>          
                <div className="service-card">
                    <h3>Service</h3>
                    <p>service description</p>
                </div>          
            </section>
            <section className="violets">
                <h1>Violets</h1>
            </section>
        </div>
    )
};

export default Welcome;