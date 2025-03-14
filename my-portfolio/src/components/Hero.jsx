import profile from "../assets/profile.png";
import "../styles/Hero.css";
import { useEffect, useState } from "react";
// import Quote from "./Quote";
const Hero = ({ quote }) => {
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  // const [quote, setQuote] = useState("");

  const words = ["Software Developer", "C++ Enthusiast", "React Specialist", "Backend Engineer"];
  const typingSpeed = 100; // Speed of typing
  const deletingSpeed = 50; // Speed of deleting
  const pauseBeforeDelete = 1000; // 1s pause before deleting
  const pauseBeforeNextWord = 1500; // 1.5s pause before next word

  let [index, setIndex] = useState(0);
  let [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingEffect = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (charIndex < words[index].length) {
            setTypedText(words[index].substring(0, charIndex + 1));
            setCharIndex((prev) => prev + 1);
          } else {
            setTimeout(() => setIsDeleting(true), pauseBeforeDelete); // Pause before deleting
          }
        } else {
          // Deleting
          if (charIndex > 0) {
            setTypedText(words[index].substring(0, charIndex - 1));
            setCharIndex((prev) => prev - 1);
          } else {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % words.length);
            setTimeout(() => {}, pauseBeforeNextWord); // Pause before next word starts
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(typingEffect);
  }, [charIndex, isDeleting, index]);

  return (
    <>
      <div className="hero__overlay">
        {quote && (
          <div className="quote-container">
            <p className="quote-text">{`"${quote}"`}</p>
          </div>
        )}
      </div>
      <section className="hero">
        <div className="hero__content">
          <img src={profile} alt="Nikhil Soni" className="hero__image" />
          <div className="logo">
            <a href="#home">
              <h2 id="nav-logo">
                Hey, I’m <span>Nikhil Soni</span>
              </h2>
            </a>
          </div>
        </div>

        <div className="hero__intro">
          <div className="hero__text">
            <h3>Transforming Ideas into Scalable Software</h3>
            <p className="hero__typing">
              I am a <span className="highlight">{typedText}</span>|
            </p>
            <p>
              Passionate <strong>Software Engineer</strong> specializing in high-performance web applications. Skilled
              in
              <strong> React.js, Node.js, C++, and Python</strong>, I craft seamless digital experiences with
              <strong> scalable architecture and intuitive UI/UX</strong>.
            </p>
          </div>
          <ul className="hero__highlights">
            <li>
              <span className="highlight__label">
                💻 <b>Major Projects:</b>
              </span>
              <span className="highlight__content">React Portfolio, AI Chatbot, UsePopcorn, Recruiter App.</span>
            </li>
            <li>
              <span className="highlight__label">
                🏆 <b>Certified In:</b>
              </span>
              <span className="highlight__content">JavaScript, Node.js, and Software Development.</span>
            </li>
            <li>
              <span className="highlight__label">
                ⚡ <b>Specialization:</b>
              </span>
              <span className="highlight__content">Backend Development with Node.js.</span>
            </li>
            <li>
              <span className="highlight__label">
                🎯 <b>Internship:</b>
              </span>
              <span className="highlight__content">Actively🔰 Applying</span>
            </li>
          </ul>

          <div className="hero__actions">
            <a href="mailto:nikhilprince973@gmail.com">
              <button className="btn">🚀 Let&apos;s Build Something Great</button>
            </a>
            <a href="https://github.com/nikhilij" target="_blank" rel="noopener noreferrer">
              <button className="btn btn--secondary">📂 View My Work</button>
            </a>
          </div>
        </div>

        <div className="hero__socials">
          <a
            href="https://www.instagram.com/nikhil.jsx/"
            target="_blank"
            rel="noopener norefer</div>rer"
            title="Instagram"
          >
            <i className="ri-instagram-line"></i>
          </a>
          <a href="https://github.com/nikhilij" target="_blank" rel="noopener noreferrer" title="Dribbble">
            <i className="ri-github-fill"></i>
          </a>
          <a
            href="https://linkedin.</a>com/in/nikhilsoni973"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <i className="ri-linkedin-box-line"></i>
          </a>
          <a href="https://x.</a>com/NikhilSoni18992" target="_blank" rel="noopener noreferrer" title="YouTube">
            <i className="ri-twitter-x-line"></i>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
