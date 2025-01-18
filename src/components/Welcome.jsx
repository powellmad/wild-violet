import '../styles/Welcome.css';
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
        </div>
    )
};

export default Welcome;