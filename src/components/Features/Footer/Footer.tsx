import styles from "@/components/css/Footer.module.css";
import {
  FaUserTie,
  FaLink,
  FaBookOpen,
  FaShieldAlt,
  FaShareAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_animation}>
        <div className={styles.footer_animation_trees}></div>
        <div className={styles.footer_animation_moto}></div>
        <div className={styles.footer_animation_second_road}></div>
        <div className={styles.footer_animation_first_road}></div>
        <div className={styles.footer_animation_car_fume}></div>
      </div>

      <div className="container">
        <div className={styles.footer_par}>
          <div>
            <h3>
              <FaUserTie /> <span>About Me</span>
            </h3>
            <a href="#">My Story</a>
            <a href="#">Skills & Technologies</a>
            <a href="#">Testimonials</a>
            <a href="#">Deliveries and Returns</a>
            <a href="#">Competition Rules</a>
          </div>

          <div>
            <h3>
              <FaLink /> <span>Quick Links</span>
            </h3>
            <a href="#">Home</a>
            <a href="#">My Works</a>
            <a href="#">Services</a>
            <a href="#">Resume</a>
            <a href="#">Contact</a>
          </div>

          <div>
            <h3>
              <FaBookOpen /> <span>Resources</span>
            </h3>
            <a href="#">Blog</a>
            <a href="#">Tutorials</a>
            <a href="#">Open Source Projects</a>
          </div>

          <div>
            <h3>
              <FaShieldAlt /> <span>Legal</span>
            </h3>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>

          <div className={styles.footer_social}>
            <h3>
              <FaShareAlt />
              <span>Stay Connected</span>
            </h3>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="#" aria-label="GitHub">
              <FaGithub /> GitHub
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter /> Twitter
            </a>
            <a href="mailto:tarekmonowar353@gmail.com">
              <FaEnvelope /> Email
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footer_copyright}>
        <p>
          Directed by
          <a
            href="https://www.facebook.com/tarekmonowar53"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Tarek Monowar
          </a>
        </p>
      </div>
    </footer>
  );
}
