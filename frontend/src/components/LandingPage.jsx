import { useEffect, useState } from 'react';
import '../styles/LandingPage.css';
import NavBar from './NavBar';
import Footer from './Footer';
import ParticleBackground from './ParticleBackground'; 

const LandingPage = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Organizers', 'Sponsors', 'Attendees'];

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 500);
    return () => clearInterval(roleInterval);
  }, [roles.length]);

  return (
    <div className="landing-page">
      <ParticleBackground /> 
      <NavBar />

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

      <Footer />

      <div className="custom-cursor"></div>
    </div>
  );
};

export default LandingPage;
