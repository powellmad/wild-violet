import "../styles/Contact.css"

function Contact() {
    return (
        <div className="contact-footer">
        <section className="contact">
            <h2>Wild Violet Counseling</h2>      
            <h3>Lauren Shuler, LCSW</h3>      
            <p>lauren@wildvioletcounseling.com</p>   
            <p>Phone: (615) 200-0576</p>   
            <p>Fax: (615)717-7301</p>   
        </section>
        <section>
            <ul className="links">
                <h3>Site Map</h3>
                {/* <li>About</li>
                <li>Services</li>
                <li>Current Clients</li>
                <li>Contact</li> */}
                <p>Coming Soon</p>
            </ul>
        </section>
        </div>
    )
};

export default Contact;