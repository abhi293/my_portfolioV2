import "../styles/Awards.css";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";
import p7 from "../assets/p7.png";
import p8 from "../assets/p8.png";
import p9 from "../assets/p9.png";
const Awards = () => {
  const certifications = [
    {
      icon: "ri-medal-fill",
      title: "Python Full Stack Development",
      issuer: "eduSkills",
      date: "Completed: Dec 2024",
      link: "https://www.linkedin.com/in/abhinav-anand-9460b0200/details/certifications/1740436842127/single-media-viewer/?profileId=ACoAADNFgEYBvWoUO8JxeQ22oHU62Kbzfkujkisg",
      image: p5,
    },
    {
      icon: "ri-code-s-slash-line",
      title: "Microsoft Azure Fundamentals",
      issuer: "Microsoft & LinkedIn",
      date: "Completed: Feb 2025",
      link: "https://www.linkedin.com/in/abhinav-anand-9460b0200/details/certifications/1740426510251/single-media-viewer/?profileId=ACoAADNFgEYBvWoUO8JxeQ22oHU62Kbzfkujkis",
      image: p6,
    },
    {
      icon: "ri-award-fill",
      title: "JavaScript Algorithms and Data Structures",
      issuer: "Scaler",
      date: "Completed: June 2024",
      link: "https://moonshot.scaler.com/s/sl/ZGB_GzkUEu",
      image: p7,
    },
    {
      icon: "ri-node-tree",
      title: "Node.js Essential Training",
      issuer: "Scaler",
      date: "Completed: Mar 2025",
      link: "https://www.linkedin.com/in/abhinav-anand-9460b0200/details/certifications/1742369985924/single-media-viewer/?profileId=ACoAADNFgEYBvWoUO8JxeQ22oHU62Kbzfkujkis",
      image: p8,
    },
    {
      icon: "ri-npmjs-line",
      title: "6-Week C++ Course Online with Certificate",
      issuer: "GeeksforGeeks",
      date: "Issued: Jan 2025",
      link: "https://www.geeksforgeeks.org/certificate/392741464116b198d05c31d0b47b6ede?utm_source=socials&utm_medium=cc_link",
      image: p9,
    },
  ];

  return (
    <section className="career__awards">
      <div className="career__awards_container">
        <h3 className="awards__title">Certifications & Achievements</h3>
        <div className="awards__container">
          {certifications.map((cert, index) => (
            <div className="award" key={index}>
              <div className="award__content">
                <img src={cert.image} alt={cert.title} className="award__image" />
                  <i className={cert.icon}></i>
                <div className="award__info">
                  <h5>
                    {cert.title} at <span>{cert.issuer}</span>
                  </h5>
                  <p>{cert.date}</p>
                </div>
              </div>
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                <i className="ri-external-link-line"></i>
              </a>
            </div>
          ))}
        </div>
        <a
          href="https://www.linkedin.com/in/abhinav-anand-9460b0200/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          Find more on LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Awards;
