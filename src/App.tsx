import { useState } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const contactEmail = 'viveikverma.vv@gmail.com';
  const phoneNo = '+91 97603 44344';

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="app">
      <nav className="navbar">
        <div className="container nav-content">
          <div className="logo">Shree Vinayak Transport Company</div>
          <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
          </button>
          <ul className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>Company</a></li>
            <li><a href="#partners" onClick={() => setIsMenuOpen(false)}>Partners</a></li>
            <li><a href="#network" onClick={() => setIsMenuOpen(false)}>Network</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </nav>

      <header className="hero">
        <div className="container">
          <h1>Next-Gen Logistics Solutions</h1>
          <p>
            Shree Vinayak Transport Company: Driving the future of Indian logistics with 
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
              <p>Specialized logistics for India's leading producer of high-grade potash and mineral fertilizers.</p>
            </div>
            <div className="card partner-card">
              <span className="card-icon">📄</span>
              <h3>Bindal Paper Mill</h3>
              <p>National distribution of premium industrial paper and high-volume paper bundles.</p>
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
          <div className="footer-brand">
            <div className="footer-logo">Shree Vinayak Transport Company</div>
            <p className="footer-desc">Providing excellence in logistics and transport services across India with a focus on safety and reliability.</p>
          </div>
          <div className="footer-info">
            <h4 className="footer-heading">Contact</h4>
            <p className="footer-text">{phoneNo}</p>
            <p className="footer-text">{contactEmail}</p>
          </div>
          <div className="footer-copy">
            <p className="footer-text">© 2026 Shree Vinayak Transport Company</p>
            <p className="footer-subtext">All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
