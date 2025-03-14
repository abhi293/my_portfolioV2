import "../styles/Awards.css";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";
import p7 from "../assets/p7.png";
import p8 from "../assets/p8.jpg";
import p9 from "../assets/p9.jpg";
const Awards = () => {
  const certifications = [
    {
      icon: "ri-medal-fill",
      title: "Learning Git and GitHub",
      issuer: "LinkedIn",
      date: "Completed: June 2024",
      link: "https://www.linkedin.com/learning/certificates/aeda61d6ba2071c04f874c0a147144737430680596afac2363bf34ae69cabc4f?trk=share_certificate",
      image: p5,
    },
    {
      icon: "ri-code-s-slash-line",
      title: "Career Essentials in Software Development",
      issuer: "Microsoft & LinkedIn",
      date: "Completed: May 2024",
      link: "https://www.linkedin.com/learning/certificates/44fabd3b2484caec9dec7473c9c0fa2bc19b847c0791345d1db1ca8f26bf3076?trk=share_certificate",
      image: p6,
    },
    {
      icon: "ri-award-fill",
      title: "Legacy JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "Completed: May 2024",
      link: "https://www.freecodecamp.org/certification/Nikhil_Soni/javascript-algorithms-and-data-structures",
      image: p7,
    },
    {
      icon: "ri-node-tree",
      title: "Node.js Essential Training",
      issuer: "LinkedIn",
      date: "Completed: May 2024",
      link: "https://www.linkedin.com/learning/certificates/a9573d2894abd382da006d80f5cd04407e1b1891893f884172ce21daad12074b?trk=share_certificate",
      image: p8,
    },
    {
      icon: "ri-npmjs-line",
      title: "6-Week C++ Course Online with Certificate",
      issuer: "GeeksforGeeks",
      date: "Issued: Jan 2025",
      link: "https://www.geeksforgeeks.org/certificate/bc58c7bf649ae1973cba2e7a2170ac44",
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
          href="https://www.linkedin.com/in/nikhilsoni973"
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
