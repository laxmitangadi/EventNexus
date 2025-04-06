import { useEffect, useRef, useState } from 'react';
import '../styles/LandingPage.css';
import { FaTwitter, FaPinterest, FaFacebook, FaLinkedin, FaUserCircle} from 'react-icons/fa';

const LandingPage = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Organizers', 'Sponsors', 'Attendees'];
  const canvasRef = useRef(null);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 500);
    return () => clearInterval(roleInterval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = '#9D00FF';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array(100).fill().map(() => new Particle());
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    };

    init();
    animate();
    window.addEventListener('resize', init);
    return () => window.removeEventListener('resize', init);
  }, []);

  return (
    <div className="landing-page">
      <canvas ref={canvasRef} className="background-canvas" />

      <nav className="main-nav">
        <div className="logo">EventNexus</div>
        <div className="search-bar">
          <input type="text" placeholder="Search for an event..." />
        </div>
        <div className="nav-links">
          
          <div className="profile-icon">
          <FaUserCircle size={30} color="#ffffff" title="Profile" />
          </div>
          <a href="#contact">Contact</a>
          <a href="#events">Events</a>
        </div>
      </nav>

      <section className="hero full-screen" id="hero">
        <h1>
          Your Gateway to <span className="flipping-role">{roles[currentRole]}</span>
        </h1>
        <p>Experience events like never before with our integrated platform</p>
      </section>

      <section className="section attendees-section" id="attendees">
        <h2>For Attendees</h2>
        <p>Discover concerts, grab tickets instantly, and enjoy exclusive offers tailored for music lovers.</p>
      </section>

      <section className="section organizers-section" id="organizers">
        <h2>For Organizers</h2>
        <p>Manage, promote, and analyze your events effortlessly with EventNexus' robust tools.</p>
      </section>

      <section className="section sponsors-section" id="sponsors">
        <h2>For Sponsors</h2>
        <p>Connect with events that align with your brand and boost your visibility with our intelligent matching.</p>
      </section>

      <section className="section about-section" id="careers">
        <h2>Careers & About Us</h2>
        <p>Join us to revolutionize the way events are experienced. Check out open roles and our mission.</p>
      </section>

      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Company</h4>
            <a href="#careers">Careers</a>
            <a href="#about">About Us</a>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <a href="#terms">Terms</a>
            <a href="#privacy">Privacy</a>
          </div>
          <div className="footer-section social-icons">
            <h4>Follow Us</h4>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer"><FaPinterest /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </footer>

      <div className="custom-cursor"></div>
    </div>
  );
};

export default LandingPage;