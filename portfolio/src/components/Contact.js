import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">
        Contact <span>Me</span>
      </h2>

      <p className="contact-text">
        Feel free to reach out to me for internships, collaborations, or projects.
      </p>

      <div className="contact-info">
        <p><FaEnvelope /> ruhamaristu10@gmail.com</p>
        <p><FaPhone /> +251 964 513 840</p>
      </div>

      <h3 className="connect-title">Connect With Me</h3>

      <div className="social-icons">
        <a href="https://www.linkedin.com/in/ruhama-ristu-97b234239/"><FaLinkedin /></a>
        <a href="https://github.com/ruhamiy"><FaGithub /></a>
        <a href="https://www.instagram.com/ruhamiy/"><FaInstagram /></a>
      </div>
    </section>
  );
}

export default Contact;
