import "../styles/Contact.css"
import "../App.css"

function Contact() {
    return (
        <section className="section flex-col">
            <h3 className="text-center mb-5">Let's Get in Touch</h3>

            <div className="contact flex justify-between">
                {/* Left section with text */}
                <div className="text-section">
                    <h5 className="mb-4">Ready to Begin your journey?</h5>
                    <p>Taking the first step toward mental health support can feel overwhelming, but you don't have to do it alone. I'm here to provide the compassionate care and professional guidance you deserve.
                    </p>
                    <p>Contact me today to schedule a consultation and learn more about how we can work together toward your mental health and wellness goals.
                    </p>
                </div>

                {/* Right section with rows containing icon and text */}
                <div className="icon-text-section flex-col">
                    <div icon-text-slat mb-6>
                        <div className="icon-text-row">
                            {/* <i class="fas fa-phone"></i> */}
                            <h6 className="text-purple">Phone</h6 >
                        </div>
                        <p className="body-small m-0">
                        (615) 200-0576
                      </p>
                        <p className="text-sm text-gray">
                            Call or text for appointments
                      </p>
                    </div>
                    <div className="icon-text-row">
                        {/* <i class="fas fa-envelope"></i> */}
                        <h6 className="text-purple">Email</h6 >
                    </div>
                    <p>lauren@wildvioletcounseling.com</p>
                </div>
            </div>

        </section>

    )
};

export default Contact;