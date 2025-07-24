import '../styles/Services.css'; // Assuming you're using a separate CSS file for styles

function Services() {
  return (
    <section className="section-with-cards">
      {/* First Section with Text */}
      <div className="section-header">
        <h3>Areas of Focus</h3>
        <p></p>
      </div>

      {/* Second Section with Cards */}
      <div className="cards-section">
        <div className="card">
          <h4 className="card-header">Eating Disorder Therapy</h4>
          <p className="card-body">Professional home services to make your living space comfortable and functional.</p>
        </div>
        <div className="card">
          <h4 className="card-header">Perinatal Mental Health</h4>
          <p className="card-body">Our wellness programs promote mental and physical health for a balanced life.</p>
        </div>
        <div className="card">
          <h4 className="card-header">LGBTQ+ Affirming Care</h4>
          <p className="card-body">Enjoy relaxing activities designed to de-stress and refresh your mind.</p>
        </div>
        <div className="card">
          <h4 className="card-header">Trauma-Informed Therapy</h4>
          <p className="card-body">Learn the benefits of healthy eating habits and nutritious meals.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;