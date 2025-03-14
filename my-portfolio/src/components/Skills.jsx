import "../styles/Skills.css";
import SkillsWithIcons from "./SkillsWithIcons";
import '../styles/SkillsWithIcons.css';
const Skills = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="skills">
        <div className="skills__desc">
          <h3>Building Scalable & High-Performance Web Applications</h3>
          <p>
            Experienced in <strong>full-stack development</strong>, specializing in{" "}
            <strong>React.js, Node.js, Express.js, and MongoDB</strong>. Passionate about solving complex problems,
            creating efficient APIs, and delivering seamless user experiences.
          </p>

          <div className="skills__actions">
            <button className="btn" onClick={scrollToContact}>
              Work With Me
            </button>

            <button className="btn btn--secondary" onClick={scrollToContact}>
              Send an Email
            </button>
          </div>
        </div>

        <div className="skills__stats">
          <div className="skill__info">
            <i className="ri-code-line"></i>
            <h5>50+</h5>
            <p>JavaScript & Node.js Projects</p>
          </div>

          <div className="skill__info">
            <i className="ri-reactjs-line"></i>
            <h5>20+</h5>
            <p>React.js Applications</p>
          </div>

          <div className="skill__info">
            <i className="ri-database-2-line"></i>
            <h5>15+</h5>
            <p>Backend APIs & Databases</p>
          </div>

          <div className="skill__info">
            <i className="ri-terminal-line"></i>
            <h5>10+</h5>
            <p>Automations & CLI Tools</p>
          </div>
        </div>
      </section>
      <SkillsWithIcons />
    </>
  );
};

export default Skills;
