import { useState } from "react";
import axios from "axios";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setIsSuccess(false);

    try {
      await axios.post("https://nikhiljsxback-frdfcrargwf0e9ed.canadacentral-01.azurewebsites.net/send", formData);
      setStatus("✅ Message Sent Successfully!");
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setStatus("");
      }, 3000);
    } catch (error) {
      setStatus("❌ Failed to send message. Try again later.", error);
      setIsSuccess(false);
    }
  };

  return (
    <section className="contact" id="contact-section">
      <h5>Got a Project?</h5>
      <h2>Let&apos;s Work Together!</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className={`btn ${isSuccess ? "success" : ""}`}>
          {isSuccess ? <i className="ri-check-line"></i> : "Send Message"}
        </button>
      </form>
      {status && <p className="status-message">{status}</p>}
      <div className="contact-details">
        <p>
          📞 Phone: <a href="tel:+919263226570">+91 9263226570</a>
        </p>
        <p>
          📧 <strong>Email 1:</strong> <a href="mailto:nikhilprince973@gmail.com">nikhilprince973@gmail.com</a>
        </p>
        <p>
          📧 <strong>Email 2:</strong> <a href="mailto:nikhiljsx@gmail.com">nikhiljsx@gmail.com</a>
        </p>
        <p>
          📍 <strong>Location:</strong> Bhubaneswar, India
        </p>
      </div>
    </section>
  );
};

export default Contact;
