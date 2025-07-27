import '../styles/Intro.css';
import image from "../images/lauren.JPG"

function Intro() {
    return (
            <section className="introduction">
                <div className="intro-text">
                    <h2>I'm happy you're here.</h2>
                    <h4 className="mb-6">I'm Lauren, a licensed mental health professional working in Tennessee</h4>
                    <p>I offer compassionate, inclusive therapy for those exploring identity, relationships, and emotional well-being. Our work is rooted in a psychodynamic perspective, helping you understand the deeper patterns that shape your thoughts and feelings. </p> 
                    <p>I specialize in LGBTQ+ mental health, perinatal support, and eating disorder treatment. This is a safe, affirming space to heal, reflect, and grow. If you're seeking relief, insight, or a deeper connection to yourself,  reach out and schedule a free consultation.  </p>
                </div>
                <div>
                    <img className="headshot" src={image} alt="headshot of lauren wearing pink rim glasses in a green sweater"/>
                </div>            
            </section>
    )
};

export default Intro;