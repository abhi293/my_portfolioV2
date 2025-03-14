import { useState, useEffect } from "react";
import "../styles/Navbar.css";

const Navbar = ({ setQuote }) => {
  const [time, setTime] = useState(new Date());
  const [location, setLocation] = useState("Fetching location...");
  const [menuOpen, setMenuOpen] = useState(false);

  const quotes = [
    "Code is like humor. When you have to explain it, it’s bad. – Cory House",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Simplicity is the soul of efficiency. – Austin Freeman",
    "First, solve the problem. Then, write the code. – John Johnson",
    "Don’t comment bad code — rewrite it. – Brian Kernighan",
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const generateQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );
            const data = await response.json();
            setLocation(data.address.city.split(" ")[0] + ", " + data.address.country);
          } catch (error) {
            console.log(error);
            setLocation("Location not found");
          }
        },
        () => {
          setLocation("Location permission denied");
        }
      );
    } else {
      setLocation("Geolocation not supported");
    }
  }, []);

  return (
    <nav className="navbar">
      <a href="#" className="navbar__logo">
        <i className="ri-code-s-slash-line"></i> NIKHIL SONI.
      </a>

      {/* Hamburger Menu */}
      <div className="navbar__hamburger" onClick={toggleMenu}>
        <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
      </div>

      {/* Navigation Links & Location in Sidebar */}
      <div className={`navbar__menu menu ${menuOpen ? "navbar__menu--open" : ""}`}>
        <a href="#" className="navbar__link">
          Home
        </a>
        <a href="#" className="navbar__link" onClick={() => scrollToSection("skills")}>
          Skills
        </a>
        <a href="#" className="navbar__link" onClick={() => scrollToSection("showcase")}>
          Projects
        </a>

        <a href="#" className="navbar__link" onClick={() => scrollToSection("career")}>
          About
        </a>
        {/* Location displayed in sidebar */}
        <div className="navbar__location__sidebar navbar__menu--open">
          <h5>{location}</h5>
          <p>{time.toLocaleTimeString()}</p>
        </div>
      </div>

      {/* Navbar Actions (Hidden on small screens) */}
      <div className="navbar__actions">
        <div className="navbar__location">
          <h5>{location}</h5>
          <p>{time.toLocaleTimeString()}</p>
        </div>
        <button className="btn" onClick={generateQuote}>
          Get a Quote
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
