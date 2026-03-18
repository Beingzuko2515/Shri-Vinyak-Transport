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
        observer.unobserve(ref.current)
      }
    }
  }, [ref])

  return isIntersecting
}

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useOnScreen(ref)

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
      className={`${className} reveal ${isVisible ? 'active' : ''}`}
    >
      {children}
    </div>
  )
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const appRef = useRef<HTMLDivElement>(null);
  
  const contactEmail = 'viveikverma.vv@gmail.com';
  const phoneNo = '+91 97603 44344';
  const whatsappNo = '919760344344';

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (appRef.current) {
        appRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
        appRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
      }
    };
    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, []);

  return (
    <div className="app" ref={appRef}>
      {/* Background Spotlight */}
      <div className="global-spotlight"></div>
      
      {/* Background Glows */}
      <div className="bg-glow bg-glow-1"></div>
      <div className="bg-glow bg-glow-2"></div>

      {/* WhatsApp Floating Button */}
      <a 
        href={`https://wa.me/${whatsappNo}?text=Hello, I'm interested in your all-India transport services.`}
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
            <li><a href="#partners" onClick={() => setIsMenuOpen(false)}>Partners</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </nav>

      <header className="hero">
        <div className="container">
          <h1 className="fade-up">India's Premier Logistics Partner</h1>
          <p className="fade-up delay-1">
            Shree Vinayak Transport Company: Providing seamless Pan-India logistics solutions with 
            precision, technology, and an unwavering commitment to safety across every state.
          </p>
          <div className="hero-cta-group fade-up delay-2">
            <a href="#contact" className="cta-button">Partner With Us</a>
            <a href={`https://wa.me/${whatsappNo}?text=Hello, I'm interested in your transport services.`} className="cta-button secondary" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
          </div>
        </div>
      </header>

      <section id="about" className="section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">All India Services</h2>
            <p className="section-subtitle">Comprehensive logistics solutions tailored for modern business needs, now serving every corner of India.</p>
          </AnimatedSection>
          
          <div className="grid">
            <AnimatedSection className="card" delay={0.1}>
              <span className="card-icon">🚛</span>
              <h3>Pan-India FTL</h3>
              <p>Full Truck Load solutions for bulk cargo with dedicated fleet management across all Indian states and union territories.</p>
            </AnimatedSection>
            <AnimatedSection className="card" delay={0.2}>
              <span className="card-icon">⚡</span>
              <h3>Nationwide Express</h3>
              <p>Time-critical logistics ensuring your high-priority cargo reaches any destination in India safely and on time.</p>
            </AnimatedSection>
            <AnimatedSection className="card" delay={0.3}>
              <span className="card-icon">💰</span>
              <h3>Strategic Logistics</h3>
              <p>Optimized routes and efficient fleet management to provide the most cost-effective rates for long-haul transport.</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section id="partners" className="section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Strategic Partnerships</h2>
            <p className="section-subtitle">The backbone of supply chains for leading industrial giants across India.</p>
          </AnimatedSection>
          
          <div className="grid">
            <AnimatedSection className="card partner-card" delay={0.1}>
              <span className="card-icon">🏛️</span>
              <h3>Ram Potash Limited</h3>
              <p>Specialized nationwide logistics for India's leading producer of high-grade potash and mineral fertilizers.</p>
            </AnimatedSection>
            <AnimatedSection className="card partner-card" delay={0.2}>
              <span className="card-icon">📄</span>
              <h3>Bindal Paper Mill</h3>
              <p>Pan-India distribution of premium industrial paper and high-volume paper bundles.</p>
            </AnimatedSection>
            <AnimatedSection className="card partner-card" delay={0.3}>
              <span className="card-icon">🏗️</span>
              <h3>Industrial Fleet</h3>
              <p>High-capacity solutions for diverse industrial manufacturing and construction needs on a national scale.</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Connect With Us</h2>
            <p className="section-subtitle">Experience the new standard in Indian logistics. Get a professional quote for any destination today.</p>
          </AnimatedSection>
          <div className="contact-grid">
            <AnimatedSection className="contact-card" delay={0.1}>
              <span className="contact-icon">📞</span>
              <h3>Direct Line</h3>
              <p><a href={`tel:${phoneNo}`} style={{ color: 'white', textDecoration: 'none' }}>{phoneNo}</a></p>
            </AnimatedSection>
            <AnimatedSection className="contact-card" delay={0.2}>
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
            <p className="footer-desc">Providing excellence in logistics and transport services across all of India with a focus on safety and reliability.</p>
          </div>
          <div className="footer-info">
            <h4 className="footer-heading">Contact</h4>
            <p className="footer-text">{phoneNo}</p>
            <p className="footer-text">{contactEmail}</p>
          </div>
          <div className="footer-subtext">
            <p className="footer-text">© 2026 Shree Vinayak Transport Company</p>
            <p className="footer-subtext">All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
