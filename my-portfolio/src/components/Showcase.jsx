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
      title: "Wedding Planner",
      date: "Febr 2025",
      description: "A sleek, responsive website for wedding planning, featuring a user-friendly interface and interactive elements including map directions using google map API.",
      liveDemo: "https://abhi293.github.io/6th-semester/AD_lab/Wedding%20Web%20-%20Copy/",
    },
    {
      id: 2,
      image: p2,
      title: "Shows & Movies Streaming Site",
      date: "ongoing",
      description: "A website that will use external APIs to stream non-copyrighted free shows and movies.",
      liveDemo: "https://abhi293.github.io/6th-semester/AD_lab/project_movie-site/",
    },
    {
      id: 3,
      image: p3,
      title: "AI-Based-Review-Classifier",
      date: "Feb 2025",
      description: "A smart chatbot that uses Logistic Regression to classify reviews as positive or negative.",
      skills: ["Artificial Intelligence (AI)", "AI Agents", "Python", "Streamlit"],
      liveDemo: "https://github.com/abhi293/AI-Based-Review-Classfier.git",
    },

    {
      id: 4,
      image: p4,
      title: "Pest Detection Recognition using AI",
      date: "Ongoing",
      description:
        "A web app that uses AI to detect and classify pests in crops, providing real-time solutions.",
      skills: ["Artificial Intelligence (AI)", "AI Agents", "Python", "Streamlit"],
      liveDemo: "https://github.com/abhi293/Improving-Insect-Pest-Recognition-by-EnsemblingMultiple-Convolutional-Neural-Network-basedModels.git",
    },
  ];

  return (
    <section className="showcase" id="showcase">
      <div className="showcase__header">
        <h3>Projects Overview:</h3>
        <a href="https://github.com/abhi293" target="_blank" rel="noopener noreferrer">
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
