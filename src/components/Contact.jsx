import "../styles/Contact.css"
import "../App.css"

function Contact() {
  return (
    <section className="section">
      <h3 className="section-header">Let's Get in Touch</h3>

      <div className="content">
        {/* Left section with text */}
        <div className="text-section">
          <h4>Ready to Begin your journey?</h4>
          <p>Taking the first step toward mental health support can feel overwhelming, but you don't have to do it alone. I'm here to provide the compassionate care and professional guidance you deserve.
          </p>
          <p>Contact me today to schedule a consultation and learn more about how we can work together toward your mental health and wellness goals.
          </p>
        </div>

        {/* Right section with rows containing icon and text */}
        <div className="icon-text-section">
          <div icon-text-slat>
            <div className="icon-text-row">
              <i class="fas fa-phone"></i>
              <h5 className="text">Phone</h5 >
            </div>
            <p className="body-small text-gray-700 m-0">
              (555) 123-4567
                      </p>
            <p className="text-sm text-gray-600">
              Call or text for appointments
                      </p>
          </div>
          <div className="icon-text-row">
            <i class="fas fa-envelope"></i>
            <h5 className="text">Email</h5 >
          </div>
          <p>lauren@wildvioletcounceling.com</p>
          {/* <div className="icon-text-row">
            <i class="fas fa-location"></i>
            <h5 className="text">Location</h5 >
          </div> */}
          {/* <div className="icon-text-row">
            <i class="fas fa-print"></i>
            <h5 className="text">Fax</h5 >
          </div> */}
        </div>
      </div>

    </section>

  )
};

export default Contact;