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
            <p><strong>CGPA:</strong> 8.55 (up to 5th Semester)</p>
            <p>2022 – 2026</p>
          </div>
        </div>

        <div className="job">
          <i className="ri-book-line"></i>
          <div className="education__info">
            <h5><strong>DAV Public School, Walmi, Patna</strong></h5>
            <p><strong>XIIth (CBSE)</strong> - 91.2%</p>
            <p>2021</p>
          </div>
        </div>

        <div className="job">
          <i className="ri-book-line"></i>
          <div className="education__info">
            <h5><strong>DAV Public School, Walmi, Patna</strong></h5>
            <p><strong>Xth (CBSE)</strong> - 94.8%</p>
            <p>2019</p>
          </div>
        </div>
      </div>

      {/* Internship Experience */}
      <div className="career__jobs">
        <h3>Internship Experience</h3>
        <div className="job">
          <i className="ri-cloud-line"></i>
          <div className="job__info">
            <h5>Cloud Virtual Intern at <strong>AWS Academy via EduSkills</strong></h5>
            <p>Oct 2024 - Dec 2024 · Remote</p>
            <p>Completed a 10-week virtual internship focused on cloud computing technologies. Gained hands-on experience with AWS services such as EC2, S3, RDS, and IAM. Developed skills in cloud architecture, cost optimization, and security.</p>
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
            <h5><strong>Browser Extension for Real-time Securities Alerts</strong></h5>
            <p>Public</p>
            <p>Developing an extension that provides real-time security alerts and updates.</p>
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
