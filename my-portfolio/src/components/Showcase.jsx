import "../styles/Showcase.css";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

const Showcase = () => {
  const projects = [
    { id: 1, image: p1, title: "React Portfolio", date: "Aug 2023", description: "A sleek portfolio with React & Tailwind.", liveDemo: "https://nikhilij.github.io/nikhil-soni-portfolio/" },
    { id: 2, image: p2, title: "UsePopcorn App", date: "Sep 2023", description: "A movie tracker app with API fetching.", liveDemo: "https://usepopcorn-beryl.vercel.app/" },
    { id: 3, image: p3, title: "AI Chatbot", date: "Oct 2023", description: "Smart chatbot using Gemini AI.", liveDemo: "https://faqchatbotij.netlify.app/" },
    { id: 4, image: p4, title: "AI Video Summarizer", date: "Ongoing", description: "Summarizes videos using AI.", liveDemo: "https://videosummarizerapp.azurewebsites.net/" },
  ];

  const [index, setIndex] = useState(0);
  const x = useMotionValue(0);
  const rotateY = useTransform(x, [-400, 0, 400], [50, 0, -50]);
  const opacity = useTransform(x, [-400, 0, 400], [0.3, 1, 0.3]);
  const scale = useTransform(x, [-400, 0, 400], [0.85, 1, 0.85]);
  const blur = useTransform(x, [-400, 0, 400], ["8px", "0px", "8px"]);

  const handleDragEnd = (_, info) => {
    if (info.offset.x > 100 && index > 0) {
      setIndex(index - 1);
    } else if (info.offset.x < -100 && index < projects.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <section className="showcase" id="showcase">
      <div className="showcase__header">
        <h3>Projects Overview:</h3>
        <a href="https://github.com/abhi293" target="_blank" rel="noopener noreferrer">
          <button className="btn">See My Work</button>
        </a>
      </div>

      <motion.div className="carousel-container" drag="x" dragConstraints={{ left: -400, right: 400 }}>
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            className="project-card"
            drag="x"
            dragConstraints={{ left: -400, right: 400 }}
            animate={{
              x: `${(i - index) * 350}px`,
              rotateY: i === index ? 0 : i < index ? -40 : 40,
              opacity: i === index ? 1 : 0.5,
              scale: i === index ? 1 : 0.85,
              filter: i === index ? "blur(0px)" : "blur(4px)",
              zIndex: i === index ? 10 : 5,
            }}
            transition={{ type: "spring", stiffness: 90, damping: 14 }}
            onDragEnd={handleDragEnd}
            whileTap={{ scale: 1.05, filter: "blur(2px)" }} // Effect when dragging
            whileHover={{ scale: 1.02 }}
          >
            <img src={project.image} alt={project.title} className="project-card__image" />
            <div className="project-card__info">
              <h5 className="project-card__title">{project.title}</h5>
              <p className="project-card__date">{project.date}</p>
              <p className="project-card__desc">{project.description}</p>
            </div>
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
              <button className="btn">View Live Demo</button>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Showcase;
