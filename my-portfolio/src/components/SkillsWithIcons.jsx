// // SkillsWithIcons.js
import "../styles/SkillsWithIcons.css";
import { VscTerminalPowershell } from "react-icons/vsc";
import { DiVisualstudio } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";
import {
  SiCplusplus,
  SiMongodb,
  SiDjango,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiLinux,
  SiNextdotjs,
  SiGooglecloud,
  SiPostman,
} from "react-icons/si";
import {
  FaNodeJs,
  FaGithub,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaDatabase,
  FaGitAlt,
  FaAws,
  FaReact,
} from "react-icons/fa";
// import {
//   SiCplusplus,
//   SiMongodb,
//   SiDjango,
//   SiTailwindcss,
//   SiBootstrap,
//   SiExpress,
//   SiLinux,
//   SiNextdotjs,
//   SiAzuredevops,
//   SiGooglecloud,
//   SiPostman,
// } from "react-icons/si";
const skillsData = [
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "SQL", icon: <FaDatabase /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "PowerShell Scripting", icon: <VscTerminalPowershell /> },
  { name: "Azure", icon: <VscAzure /> },
  { name: "C/C++", icon: <SiCplusplus /> },
  { name: "NoSQL", icon: <SiMongodb /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Bash/Linux", icon: <SiLinux /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Google Cloud Platform", icon: <SiGooglecloud /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Visual Studio Code", icon: <DiVisualstudio /> },
];

const SkillsWithIcons = () => {
  return (
    <section className="skills-with-icons" id="skills">
      <h3>Technical Skills</h3>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-icon">{skill.icon}</div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsWithIcons;
