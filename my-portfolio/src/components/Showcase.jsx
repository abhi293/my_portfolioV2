import "../styles/Showcase.css";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";

const Showcase = () => {
  const projects = [
    {
      id: 1,
      image: p1,
      title: "React Portfolio",
      date: "August 2023",
      description: "A sleek, responsive portfolio built with React.js and Tailwind CSS.",
      liveDemo: "https://nikhilij.github.io/nikhil-soni-portfolio/",
    },
    {
      id: 2,
      image: p2,
      title: "UsePopcorn App",
      date: "September 2023",
      description: "A movie tracker app with API fetching and interactive UI.",
      liveDemo: "https://usepopcorn-beryl.vercel.app/",
    },
    {
      id: 3,
      image: p3,
      title: "AI-Based Chatbot",
      date: "October 2023",
      description: "A smart chatbot powered by Gemini AI for FAQ automation.",
      liveDemo: "https://faqchatbotij.netlify.app/",
    },

    {
      id: 4,
      image: p4,
      title: "AI Video Summarizer",
      date: "Ongoing",
      description:
        "Built an AI-powered video summarizer using Gemini Flash 2.0, leveraging AI agents and Streamlit for an interactive and efficient user experience.",
      skills: ["Artificial Intelligence (AI)", "AI Agents", "Python", "Streamlit"],
      liveDemo: "https://videosummarizerapp.azurewebsites.net/",
    },
  ];

  return (
    <section className="showcase" id="showcase">
      <div className="showcase__header">
        <h3>Projects Overview:</h3>
        <a href="https://github.com/nikhilij" target="_blank" rel="noopener noreferrer">
          <button className="btn">See My Work</button>
        </a>
      </div>

      <div className="showcase__categories">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} className="project-card__image" />
            <div className="project-card__info">
              <h5 className="project-card__title">{project.title}</h5>
              <p className="project-card__date">{project.date}</p>
              <p className="project-card__desc">{project.description}</p>
            </div>
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
              <button className="btn">View Live Demo</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Showcase;
