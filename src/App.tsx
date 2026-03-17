import { useState, useEffect, useRef } from 'react'
import './App.css'

// Custom hook for scroll animations
function useOnScreen(ref: React.RefObject<Element | null>) {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold: 0.1 }
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      if (ref.current) {
        if (ref.current) observer.unobserve(ref.current)
      }
    }
  }, [ref])

  return isIntersecting
}

function AnimatedSection({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useOnScreen(ref)

  return (
    <div
      ref={ref}
      className={`${className} reveal ${isVisible ? 'active' : ''}`}
    >
      {children}
    </div>
  )
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  
  const contactEmail = 'viveikverma.vv@gmail.com';
  const phoneNo = '+91 97603 44344';
  const whatsappNo = '919760344344';

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleFaq = (index: number) => setActiveFaq(activeFaq === index ? null : index);

  const faqs = [
    {
      q: "What areas do you cover?",
      a: "We specialize in North India logistics, providing comprehensive coverage across Delhi NCR, Punjab, Haryana, Uttar Pradesh, Rajasthan, and Uttarakhand."
    },
    {
      q: "Do you provide real-time tracking?",
      a: "Yes, our entire fleet is equipped with advanced GPS technology, providing real-time tracking and 24/7 visibility through our mission control center."
    },
    {
      q: "What types of industries do you serve?",
      a: "We serve a diverse range of industries including Paper, Chemicals, Manufacturing, and Agriculture, with specialized solutions for each sector."
    },
    {
      q: "How can I get an instant quote?",
      a: "You can click 'Partner With Us' or reach out directly via WhatsApp for a quick, customized quote based on your specific requirements."
    }
  ];

  return (
    <div className="app">
      {/* WhatsApp Floating Button */}
      <a 
        href={`https://wa.me/${whatsappNo}?text=Hello, I'm interested in your transport services.`}
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <span className="whatsapp-icon">💬</span>
      </a>

      <nav className="navbar">
        <div className="container nav-content">
          <div className="logo">Shree Vinayak Transport Company</div>
          <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
          </button>
          <ul className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>Services</a></li>
            <li><a href="#stats" onClick={() => setIsMenuOpen(false)}>Trust</a></li>
            <li><a href="#partners" onClick={() => setIsMenuOpen(false)}>Partners</a></li>
            <li><a href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </nav>

      <header className="hero">
        <div className="container">
          <h1 className="fade-up">North India's Logistics Leader</h1>
          <p className="fade-up delay-1">
            Shree Vinayak Transport Company: Driving the future of logistics in North India with 
            precision, technology, and an unwavering commitment to safety.
          </p>
          <a href="#contact" className="cta-button fade-up delay-2">Partner With Us</a>
        </div>
      </header>

      {/* Stats Section */}
      <section id="stats" className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            <AnimatedSection className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Years Experience</div>
            </AnimatedSection>
            <AnimatedSection className="stat-card">
              <div className="stat-number">100+</div>
              <div className="stat-label">North Indian Cities</div>
            </AnimatedSection>
            <AnimatedSection className="stat-card">
              <div className="stat-number">10k+</div>
              <div className="stat-label">Shipments Delivered</div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Professional Services</h2>
            <p className="section-subtitle">Comprehensive logistics solutions tailored for modern business needs in North India.</p>
          </AnimatedSection>
          
          <div className="grid">
            <AnimatedSection className="card">
              <span className="card-icon">🚛</span>
              <h3>FTL Transport</h3>
              <p>Full Truck Load solutions for bulk cargo with dedicated fleet management across North Indian states.</p>
            </AnimatedSection>
            <AnimatedSection className="card">
              <span className="card-icon">⚡</span>
              <h3>Express Delivery</h3>
              <p>Time-critical logistics ensuring your high-priority cargo reaches its destination safely and on time.</p>
            </AnimatedSection>
            <AnimatedSection className="card">
              <span className="card-icon">💰</span>
              <h3>Competitive Pricing</h3>
              <p>Optimized routes and efficient fleet management to provide you with the most cost-effective rates in the industry.</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section id="partners" className="section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Strategic Partnerships</h2>
            <p className="section-subtitle">The backbone of supply chains for the leading industrial giants of North India.</p>
          </AnimatedSection>
          
          <div className="grid">
            <AnimatedSection className="card partner-card">
              <span className="card-icon">🏛️</span>
              <h3>Ram Potash Limited</h3>
              <p>Specialized logistics for India's leading producer of high-grade potash and mineral fertilizers.</p>
            </AnimatedSection>
            <AnimatedSection className="card partner-card">
              <span className="card-icon">📄</span>
              <h3>Bindal Paper Mill</h3>
              <p>National distribution of premium industrial paper and high-volume paper bundles.</p>
            </AnimatedSection>
            <AnimatedSection className="card partner-card">
              <span className="card-icon">🏗️</span>
              <h3>Industrial Fleet</h3>
              <p>High-capacity solutions for diverse industrial manufacturing and construction needs.</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section id="faq" className="section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Common Questions</h2>
            <p className="section-subtitle">Everything you need to know about our services.</p>
          </AnimatedSection>

          <div className="faq-container">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} className={`faq-item ${activeFaq === index ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => toggleFaq(index)}>
                  <h3>{faq.q}</h3>
                  <span className="faq-toggle">{activeFaq === index ? '−' : '+'}</span>
                </div>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="network" className="section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">North India Network</h2>
            <p className="section-subtitle">Providing seamless logistics and transport solutions across major industrial hubs in North India.</p>
          </AnimatedSection>
          
          <div className="region-container">
            <div className="region-group">
              <h3 className="region-title">Our Key Hubs</h3>
              <div className="branch-grid">
                <div className="branch-item">Delhi NCR</div>
                <div className="branch-item">Chandigarh</div>
                <div className="branch-item">Ludhiana</div>
                <div className="branch-item">Jaipur</div>
                <div className="branch-item">Lucknow</div>
                <div className="branch-item">Amritsar</div>
                <div className="branch-item">Kanpur</div>
                <div className="branch-item">Dehradun</div>
                <div className="branch-item">Jodhpur</div>
                <div className="branch-item">Agra</div>
              </div>
            </div>
          </div>

          <AnimatedSection className="coverage-badge">
            Serving 100+ Cities in North India
          </AnimatedSection>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Connect With Us</h2>
            <p className="section-subtitle">Experience the new standard in North India logistics. Get a professional quote today.</p>
          </AnimatedSection>
          <div className="contact-grid">
            <AnimatedSection className="contact-card">
              <span className="contact-icon">📞</span>
              <h3>Direct Line</h3>
              <p><a href={`tel:${phoneNo}`} style={{ color: 'white', textDecoration: 'none' }}>{phoneNo}</a></p>
            </AnimatedSection>
            <AnimatedSection className="contact-card">
              <span className="contact-icon">✉️</span>
              <h3>Corporate Email</h3>
              <p><a href={`mailto:${contactEmail}`} style={{ color: 'white', textDecoration: 'none' }}>{contactEmail}</a></p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-content">
          <div className="footer-brand">
            <div className="footer-logo">Shree Vinayak Transport Company</div>
            <p className="footer-desc">Providing excellence in logistics and transport services across North India with a focus on safety and reliability.</p>
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
