import './App.css'

function App() {
  const contactEmail = 'viveikverma.vv@gmail.com';
  const phoneNo = '+91 97603 44344';

  return (
    <div className="app">
      <nav className="navbar">
        <div className="container nav-content">
          <div className="logo">Shri Vinyak Transport</div>
          <ul className="nav-links">
            <li><a href="#about">Company</a></li>
            <li><a href="#partners">Partners</a></li>
            <li><a href="#network">Network</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <header className="hero">
        <div className="container">
          <h1>Next-Gen Logistics Solutions</h1>
          <p>
            Shri Vinyak Transport: Driving the future of Indian logistics with 
            precision, technology, and an unwavering commitment to safety.
          </p>
          <a href="#contact" className="cta-button">Partner With Us</a>
        </div>
      </header>

      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">Established Excellence</h2>
          <p className="section-subtitle">A legacy of trust, moving India's industry forward since 2014.</p>
          <div className="grid">
            <div className="card">
              <span className="card-icon">🛡️</span>
              <h3>Premium Security</h3>
              <p>Every shipment is protected by industry-leading safety protocols and full transit insurance.</p>
            </div>
            <div className="card">
              <span className="card-icon">⚡</span>
              <h3>Rapid Response</h3>
              <p>Real-time GPS tracking and 24/7 mission control for total visibility of your cargo.</p>
            </div>
            <div className="card">
              <span className="card-icon">🌍</span>
              <h3>Global Standards</h3>
              <p>Bringing international logistics best practices to the heart of the Indian transport sector.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="partners" className="section">
        <div className="container">
          <h2 className="section-title">Strategic Partnerships</h2>
          <p className="section-subtitle">We are the backbone of supply chains for India's leading industrial giants.</p>
          <div className="grid">
            <div className="card partner-card">
              <span className="card-icon">🏛️</span>
              <h3>Ram Potash Limited</h3>
              <p>Exclusive logistics management for national distribution and bulk resource movement.</p>
            </div>
            <div className="card partner-card">
              <span className="card-icon">📄</span>
              <h3>Bindal Paper Mill</h3>
              <p>Specialized heavy-duty transport and industrial paper logistics across the northern corridor.</p>
            </div>
            <div className="card partner-card">
              <span className="card-icon">🚛</span>
              <h3>Industrial Fleet</h3>
              <p>High-capacity FTL (Full Truck Load) solutions for diverse industrial and manufacturing needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="network" className="section">
        <div className="container">
          <h2 className="section-title">Pan-India Network</h2>
          <p className="section-subtitle">Providing seamless logistics and transport solutions across all 28 states and 8 union territories of India.</p>
          
          <div className="region-container">
            <div className="region-group">
              <h3 className="region-title">North India</h3>
              <div className="branch-grid">
                <div className="branch-item">Delhi NCR</div>
                <div className="branch-item">Chandigarh</div>
                <div className="branch-item">Ludhiana</div>
                <div className="branch-item">Jaipur</div>
                <div className="branch-item">Lucknow</div>
              </div>
            </div>

            <div className="region-group" style={{ marginTop: '40px' }}>
              <h3 className="region-title">West India</h3>
              <div className="branch-grid">
                <div className="branch-item">Mumbai</div>
                <div className="branch-item">Pune</div>
                <div className="branch-item">Ahmedabad</div>
                <div className="branch-item">Surat</div>
                <div className="branch-item">Nagpur</div>
              </div>
            </div>

            <div className="region-group" style={{ marginTop: '40px' }}>
              <h3 className="region-title">South India</h3>
              <div className="branch-grid">
                <div className="branch-item">Bangalore</div>
                <div className="branch-item">Chennai</div>
                <div className="branch-item">Hyderabad</div>
                <div className="branch-item">Kochi</div>
                <div className="branch-item">Coimbatore</div>
              </div>
            </div>

            <div className="region-group" style={{ marginTop: '40px' }}>
              <h3 className="region-title">East & Central India</h3>
              <div className="branch-grid">
                <div className="branch-item">Kolkata</div>
                <div className="branch-item">Bhubaneswar</div>
                <div className="branch-item">Guwahati</div>
                <div className="branch-item">Indore</div>
                <div className="branch-item">Raipur</div>
              </div>
            </div>
          </div>

          <div className="coverage-badge">
            Serving 500+ Cities Nationwide
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Connect With Us</h2>
          <p className="section-subtitle">Experience the new standard in logistics. Get a professional quote today.</p>
          <div className="contact-grid">
            <div className="contact-card">
              <span className="contact-icon">📞</span>
              <h3>Direct Line</h3>
              <p><a href={`tel:${phoneNo}`} style={{ color: 'white', textDecoration: 'none' }}>{phoneNo}</a></p>
            </div>
            <div className="contact-card">
              <span className="contact-icon">✉️</span>
              <h3>Corporate Email</h3>
              <p><a href={`mailto:${contactEmail}`} style={{ color: 'white', textDecoration: 'none' }}>{contactEmail}</a></p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-content">
          <div>
            <div className="footer-logo">Shri Vinyak Transport</div>
            <p style={{ color: 'var(--text-muted)' }}>Providing excellence in logistics and transport services across India with a focus on safety and reliability.</p>
          </div>
          <div>
            <h4 style={{ color: 'white', marginBottom: '20px' }}>Contact</h4>
            <p style={{ color: 'var(--text-muted)' }}>{phoneNo}</p>
            <p style={{ color: 'var(--text-muted)' }}>{contactEmail}</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ color: 'var(--text-muted)' }}>© 2026 Shri Vinyak Transport</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
