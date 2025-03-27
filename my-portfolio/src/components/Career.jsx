import "../styles/Career.css";

const Career = () => {
  return (
    <section className="career" id="career">
      <div className="career__header">
        <h3>My Career Journey</h3>
        <p>Shaping ideas into high-performance software solutions.</p>
      </div>

      {/* Education */}
      <div className="career__jobs">
        <h3>Education</h3>
        <div className="education__item job">
          <i className="ri-graduation-cap-line"></i>
          <div className="education__info job__info">
            <h5><strong>Kalinga Institute of Industrial Technology (KIIT)</strong></h5>
            <p>Bachelor of Technology in Computer Science and Engineering</p>
            <p><strong>CGPA:</strong> 9.06 (up to 5th Semester)</p>
            <p>2022 – 2026</p>
          </div>
        </div>

        <div className="job">
          <i className="ri-book-line"></i>
          <div className="education__info">
            <h5><strong>Model Multiple College, Janakpur, Nepal</strong></h5>
            <p><strong>XIIth (CBSE)</strong> - 87.5%</p>
            <p>2020</p>
          </div>
        </div>

        <div className="job">
          <i className="ri-book-line"></i>
          <div className="education__info">
            <h5><strong>MIT School</strong></h5>
            <p><strong>Xth (CBSE)</strong> - 92.5%</p>
            <p>2018</p>
          </div>
        </div>
      </div>

      {/* Internship Experience */}
      <div className="career__jobs">
        <h3>Internship Experience</h3>
        <div className="job">
          <i className="ri-cloud-line"></i>
          <div className="job__info">
            <h5>Python FullStack Virtual Intern at <strong>eduSkills Foundation </strong></h5>
            <p>Oct 2024 - Dec 2024 · Remote</p>
            <p>Completed a 10-week virtual internship focused on developing tools and websites using <strong>HTML, CSS, JS and Python,</strong> with enhanced compatibility and security</p>
          </div>
        </div>
        <p>Actively applying for more internship opportunities.</p>
      </div>

      {/* Specialization */}
      <div className="career__specialization">
        <h3>Specialization</h3>
        <div className="job">
          <i className="ri-nodejs-line"></i>
          <div className="job__info">
            <h5>Backend Development with <strong>Node.js</strong></h5>
            <p>Currently mastering backend systems, REST APIs, and database integrations.</p>
          </div>
        </div>
      </div>

      {/* Notable Projects */}
      <div className="career__projects">
        <h3>Notable Projects</h3>
        <div className="job">
          <i className="ri-code-s-slash-line"></i>
          <div className="job__info">
            <h5><strong>AI-Based Review Classifier</strong></h5>
            <p>Public</p>
            <p>Backend using NLP models like TF-IDF or BERT to classify reviews. Built with Node.js, integrates ML via TensorFlow.js or Python APIs, supports MongoDB.</p>
          </div>
        </div>

        <div className="job">
          <i className="ri-lock-password-line"></i>
          <div className="job__info">
            <h5><strong>Password Breach Notification System</strong></h5>
            <p>Private</p>
            <p>Alerts users when credentials are exposed in data breaches. Uses Have I Been Pwned API, securely stores breach data, and sends notifications.</p>
          </div>
        </div>

        <div className="job">
          <i className="ri-alarm-warning-line"></i>
          <div className="job__info">
            <h5><strong>Pest Detection and Recognition using multiple CNNs (in collab)</strong></h5>
            <p>Public</p>
            <p>Ongoing project that uses multiple algorithms of CNNs to detect and recognize pests in crops</p>
          </div>
        </div>

        <div className="job">
          <i className="ri-file-search-line"></i>
          <div className="job__info">
            <h5><strong>Log File Analyzer</strong></h5>
            <p>Private</p>
            <p>Efficiently parses, analyzes, and monitors log files. Supports log filtering, anomaly detection, and real-time reporting.</p>
          </div>
        </div>

        <div className="job">
          <i className="ri-hospital-line"></i>
          <div className="job__info">
            <h5><strong>Medical Insurance Cost Prediction Model</strong></h5>
            <p>Public</p>
            <p>Developing a predictive model to estimate medical insurance costs for middle-class families.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
