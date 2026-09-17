import './App.css'
import logo from './assets/company_logo.svg'

function App() {
  return (
    <>
      <header>
        <nav className="navbar">
          <img src={logo} alt="Rajdeep Digitech logo" className="logo-icon"/>
          <div className="logo">Rajdeep Digitech</div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="section-inner">
            <h1>Rajdeep Digitech</h1>
            <p className="tagline">A web development company</p>
            <p>
              We design and build websites for businesses of every size — from
              first concept to launch.
            </p>
            <a href="#contact" className="cta">Get in touch</a>
          </div>
        </section>

        <section id="services" className="services">
          <div className="section-inner">
            <h2>What we do</h2>
            <ul>
              <li>
                <h3>Web Design</h3>
                <p>Custom layouts and interfaces built around your brand.</p>
              </li>
              <li>
                <h3>Web Development</h3>
                <p>Fast, responsive sites built with modern frameworks.</p>
              </li>
              <li>
                <h3>E-commerce</h3>
                <p>Online stores that are easy to manage and easy to buy from.</p>
              </li>
              <li>
                <h3>Maintenance &amp; Support</h3>
                <p>Ongoing updates, fixes, and hosting so your site stays healthy.</p>
              </li>
            </ul>
          </div>
        </section>

        <section id="about" className="about">
          <div className="section-inner">
            <h2>About us</h2>
            <p>
              Rajdeep Digitech partners with businesses to turn ideas into
              working websites — from planning through to launch and beyond.
            </p>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="section-inner">
            <h2>Contact us</h2>
            <p>Have a project in mind? Reach out and let's talk.</p>
            <a href="rajdeepdigitech@gmail.com">Email</a>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Rajdeep Digitech</p>
      </footer>
    </>
  )
}

export default App