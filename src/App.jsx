import { useEffect, useState } from 'react'
import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import logoImage from './assets/idemo-logo.png'
import heroProjectImage from './assets/hero-project.jpg'
import aboutImage from './assets/about-image.jpg'
import debrisServiceImage from './assets/service-debris.jpg'
import demolitionServiceImage from './assets/service-demolition.jpg'
import sitePrepImage from './assets/service-site-prep.jpg'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Why iDemo', href: '/why-idemo' },
  { label: 'Contact', href: '/contact' },
]

const serviceGroups = [
  {
    title: 'Demolition Services',
    image: demolitionServiceImage,
    imageAlt: 'Demolition services project site with heavy equipment',
    items: [
      'Structural demolition',
      'Interior / selective demolition',
      'Commercial and multifamily demolition',
      'Concrete breaking and removal',
      'Site clearing and preparation',
    ],
  },
  {
    title: 'Site Preparation',
    image: sitePrepImage,
    imageAlt: 'Site preparation work with demolition equipment on location',
    items: [
      'Structural removal and debris clearing',
      'Equipment-assisted demolition',
      'Safe dismantling of building components',
      'Preparation for new construction',
    ],
  },
  {
    title: 'Debris Removal & Disposal',
    image: debrisServiceImage,
    imageAlt: 'Debris removal and disposal work on a demolition site',
    items: [
      'Construction debris removal',
      'Responsible hauling and disposal',
      'Jobsite cleanup and preparation',
      'Recycling and material separation when possible',
    ],
  },
]

const aboutPoints = [
  'Execute with precision and accountability',
  'Maintain aggressive schedules without sacrificing safety',
  'Coordinate cleanly with all trades and project teams',
  'Solve field challenges quickly and intelligently',
  'Stand behind our work',
  'Deliver consistent results on every project',
]

const whyCards = [
  {
    number: '01',
    title: 'Field-Tested Leadership',
    text: 'Our team is built from real jobsite experience. We understand sequencing, coordination, and construction realities — which means fewer surprises and smarter execution.',
  },
  {
    number: '02',
    title: 'Precision Execution',
    text: 'Demolition requires careful planning and controlled execution. We coordinate closely with project teams to ensure work is completed safely, efficiently, and according to schedule.',
    result: 'Result: cleaner sites, fewer delays, and smoother project transitions.',
  },
  {
    number: '03',
    title: 'Schedule-Driven Performance',
    text: 'We plan ahead, staff appropriately, and stay aligned with project milestones to keep work moving and deadlines intact.',
  },
  {
    number: '04',
    title: 'Solutions in the Field',
    text: 'When challenges arise, we respond quickly with practical solutions that keep projects on track and within budget.',
  },
  {
    number: '05',
    title: 'Safety First',
    text: 'Disciplined safety practices protect our team, our partners, and the jobsite — because safe projects are productive projects.',
  },
  {
    number: '06',
    title: 'Reliable Performance',
    text: 'Experienced demolition professionals, compliant jobsite practices, and dependable follow-through keep every project moving forward with confidence.',
  },
]

const differenceItems = [
  'Experienced demolition professionals',
  'Coordination that prevents delays',
  'Schedule-focused execution',
  'Rapid problem solving in the field',
  'Safe, compliant jobsite practices',
  'Reliable performance you can depend on',
]

function Placeholder({ title, subtitle, className = '' }) {
  return (
    <div className={`image-placeholder ${className}`.trim()} aria-label={title}>
      <div>
        <span>{title}</span>
        <small>{subtitle}</small>
      </div>
    </div>
  )
}

function PageHero({ label, title, subtitle, dark = false }) {
  return (
    <section className={`page-hero ${dark ? 'dark' : ''}`}>
      <div className="container section-intro centered narrow">
        <p className="section-label">{label}</p>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  )
}

function HomePage() {
  return (
    <section className="hero home-hero-simple">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Where Integrity Meets Execution</p>
          <h1>Professional Demolition Services</h1>
          <h2>Executed with Precision. Delivered Safely.</h2>
          <p className="hero-text">
            iDemo provides professional demolition services for commercial,
            institutional, and multifamily construction projects. We help contractors and
            owners prepare sites safely, efficiently, and on schedule so the next phase of
            construction can begin with confidence.
          </p>
          <div className="hero-actions">
            <NavLink className="button button-primary" to="/contact">
              Request Bid
            </NavLink>
            <NavLink className="button button-secondary" to="/services">
              View Services
            </NavLink>
          </div>
        </div>

        <div className="hero-image-wrap">
          <img src={heroProjectImage} alt="Demolition project site" className="hero-project-image" />
        </div>
      </div>
    </section>
  )
}

function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Built on Grit. Driven by Precision. Trusted to Deliver."
        subtitle="iDemo was founded on hard work, integrity, and relentless execution in the field."
        dark
      />
      <section className="section about-section">
        <div className="container section-intro">
          <p>
            Shortly after arriving in the United States, our founder began working in the
            construction trades, learning firsthand the discipline, craftsmanship, and
            accountability required on demanding job sites. What began as long days in the field
            evolved into a deep understanding of how demolition must be performed safely,
            strategically, and efficiently to prepare sites for the next phase of construction.
          </p>
          <p>
            iDemo was formed to bring that field-earned experience into a company built around
            reliability, technical expertise, and trust.
          </p>
          <p>
            Today, iDemo provides professional demolition services to public and private sector
            clients across commercial, institutional, multifamily, and infrastructure projects.
          </p>
        </div>

        <div className="container about-grid">
          <div className="about-copy">
            <h3>Clients rely on iDemo because we:</h3>
            <div className="feature-grid compact">
              {aboutPoints.map((point) => (
                <article className="feature-card small" key={point}>
                  <span className="feature-check">✓</span>
                  <p>{point}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="about-image-wrap">
            <img src={aboutImage} alt="Demolition equipment and crew on site" className="about-page-image" />
          </div>
        </div>
      </section>
    </>
  )
}

function ServicesPage() {
  return (
    <>
      <PageHero
        label="Core Services"
        title="Demolition solutions that prepare sites for what comes next."
        subtitle="From selective interior demolition to full teardown and debris removal, iDemo keeps projects moving."
        dark
      />
      <section className="section services-section services-page-section">
        <div className="container service-grid">
          {serviceGroups.map((group) => (
            <article className="service-card" key={group.title}>
              {group.image ? (
                <div className="service-image-wrap">
                  <img src={group.image} alt={group.imageAlt} className="service-card-image" />
                </div>
              ) : (
                <Placeholder
                  className="service-image"
                  title={`${group.title} Image`}
                  subtitle="Replace with project photo"
                />
              )}
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

function WhyPage() {
  return (
    <>
      <PageHero
        label="Why iDemo"
        title="Demolition That Keeps Projects Moving."
        subtitle="iDemo delivers professional demolition services with a focus on coordination, safety, and efficient execution."
        dark
      />
      <section className="section why-section why-page-section">
        <div className="container section-intro centered narrow light-text">
          <p className="accent-line">Integrity in every project. Performance on every jobsite.</p>
          <p>
            We help contractors and owners reduce risk, protect timelines, and prepare sites for
            the next phase of construction.
          </p>
        </div>

        <div className="container why-grid">
          {whyCards.map((card) => (
            <article className="why-card" key={card.number}>
              <span className="why-number">{card.number}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              {card.result && <p className="result-line">{card.result}</p>}
            </article>
          ))}
        </div>
      </section>

      <section className="section difference-section">
        <div className="container difference-wrap">
          <div>
            <p className="section-label">The iDemo Difference</p>
            <h2>Built to perform under real project conditions.</h2>
            <p>
              We understand that demolition is not just about tearing structures down — it is
              about preparing a site safely, efficiently, and correctly for what comes next.
            </p>
          </div>
          <div className="difference-list">
            {differenceItems.map((item) => (
              <div className="difference-item" key={item}>
                <span>✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact Us"
        title="Request a bid or get in touch with our team."
        subtitle="We’re here to discuss your demolition scope, timeline, and site needs."
        dark
      />
      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-copy">
            <h2>Get In Touch</h2>
            <p>Tell us about your project and we&apos;ll follow up promptly.</p>
            <div className="contact-list">
              <div>
                <h4>Phone</h4>
                <p>(555) 000-0000</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>info@idemo-demo.com</p>
              </div>
              <div>
                <h4>Hours</h4>
                <p>Monday – Friday: 7am – 6pm</p>
                <p>Saturday: 8am – 2pm</p>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-grid">
              <label>
                Full Name *
                <input type="text" placeholder="John Smith" />
              </label>
              <label>
                Email *
                <input type="email" placeholder="john@example.com" />
              </label>
              <label>
                Phone
                <input type="tel" placeholder="(555) 000-0000" />
              </label>
              <label>
                Service Needed
                <select defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option>Structural demolition</option>
                  <option>Interior / selective demolition</option>
                  <option>Site preparation</option>
                  <option>Debris removal & disposal</option>
                </select>
              </label>
            </div>
            <label>
              Message *
              <textarea rows="6" placeholder="Describe what you need..." />
            </label>
            <button className="button button-primary" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const pageTitles = {
    '/': 'Home',
    '/about': 'About',
    '/services': 'Services',
    '/why-idemo': 'Why iDemo',
    '/contact': 'Contact',
  }

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false)
    window.addEventListener('resize', closeMenu)
    return () => window.removeEventListener('resize', closeMenu)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.title = pageTitles[location.pathname] || 'iDemo'
  }, [location.pathname])

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container nav-row">
          <NavLink className="brand" to="/">
            <span className="brand-mark" aria-hidden="true"><img src={logoImage} alt="" className="brand-logo-image" /></span>
            <span className="brand-text">iDemo</span>
          </NavLink>

          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) => (isActive ? 'active' : '')}
                end={item.href === '/'}
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink className="button button-primary mobile-only" to="/contact">
              Request Bid
            </NavLink>
          </nav>

          <div className="nav-actions">
            <NavLink className="button button-primary desktop-only" to="/contact">
              Request Bid
            </NavLink>
            <button
              className={`menu-toggle ${menuOpen ? 'open' : ''}`}
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/why-idemo" element={<WhyPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

        <footer className="footer">
  <div className="container footer-grid footer-grid-compact">
    <div className="footer-company">
      <NavLink className="brand footer-brand" to="/">
        <span className="brand-mark" aria-hidden="true"><img src={logoImage} alt="" className="brand-logo-image" /></span>
        <span className="brand-text">iDemo</span>
      </NavLink>
      <p>
        Professional demolition services built for safety, performance, and dependable
        execution.
      </p>
    </div>

    <div>
      <h4>Navigation</h4>
      <div className="footer-links">
        {navItems.map((item) => (
          <NavLink key={item.href} to={item.href} end={item.href === '/'}>
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>

    <div>
      <h4>Services</h4>
      <div className="footer-links">
        <NavLink to="/services">Structural Demolition</NavLink>
        <NavLink to="/services">Selective Demolition</NavLink>
        <NavLink to="/services">Site Preparation</NavLink>
        <NavLink to="/services">Debris Removal</NavLink>
      </div>
    </div>

    <div className="footer-contact">
      <h4>Get In Touch</h4>
      <div className="footer-links">
        <a href="tel:5550000000">(555) 000-0000</a>
        <NavLink className="button button-primary footer-button" to="/contact">
          Request a Bid
        </NavLink>
      </div>
    </div>
  </div>

  <div className="container footer-bottom">
    <p>© 2026 iDemo. All rights reserved.</p>
    <p>Where Integrity Meets Execution</p>
  </div>
</footer>
    </div>
  )
}

export default App
