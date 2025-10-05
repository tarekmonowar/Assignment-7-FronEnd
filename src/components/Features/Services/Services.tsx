import styles from "@/components/css/WhyChooseMe.module.css";
import { FaReply } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";

export default function Services() {
  return (
    <section className="container mx-auto mt-16 sm:mt-36 pb-12 font-third">
      <div className={styles.choosemain}>
        <div className={styles.choosetitle} data-aos="fade-down">
          <h2>Services I Provide</h2>
          <h5 className="text-white/60 text-base">
            &quot;Let&rsquo;s turn your ideas into reality&quot;
          </h5>
        </div>

        <div className={styles.choosebody} data-aos="zoom-in-up">
          <div>
            <div className={styles.choose_body_hvbg}></div>
            <FaReply
              className={styles.icon}
              style={{
                color: "#2ecc71",
                fontSize: "40px",
                position: "relative",
                zIndex: "2",
              }}
            />
            <h3>Responsive Development</h3>
            <p>
              I ensure that all websites are fully responsive and look great on
              any device, from desktops to smartphones.
            </p>
          </div>

          <div>
            <div className={styles.choose_body_hvbg}></div>

            <FaReact
              className={styles.icon}
              style={{
                color: "#3498db",
                fontSize: "40px",
                position: "relative",
                zIndex: "2",
              }}
            />
            <h3>Frontend in React and Next.js</h3>
            <p>
              I create fast, responsive, and SEO-friendly frontends using React
              and Next.js—delivering smooth user experiences across all devices
              with clean, modern UI.
            </p>
          </div>

          <div>
            <div className={styles.choose_body_hvbg}></div>

            <FaNodeJs
              className={styles.icon}
              style={{
                color: "#F05A7E",
                fontSize: "40px",
                position: "relative",
                zIndex: "2",
              }}
            />
            <h3>Backend in Node.js with Express</h3>
            <p>
              I build scalable and secure backend systems using Node.js and
              Express, handling everything from RESTful APIs to database
              integration and user authentication.
            </p>
          </div>

          <div>
            <div className={styles.choose_body_hvbg}></div>

            <FaProjectDiagram
              className={styles.icon}
              style={{
                color: "#F05A7E",
                fontSize: "40px",
                position: "relative",
                zIndex: "2",
              }}
            />
            <h3>API Development and Integration</h3>
            <p>
              I specialize in building robust APIs and seamlessly integrating
              third-party services to ensure smooth and efficient data exchange
              across platforms.
            </p>
          </div>

          <div>
            <div className={styles.choose_body_hvbg}></div>

            <FaDatabase
              className={styles.icon}
              style={{
                color: "#009688",
                fontSize: "40px",
                position: "relative",
                zIndex: "2",
              }}
            />
            <h3>Database MySQL & MongoDB</h3>
            <p>
              Offering expertise in MySQL and MongoDB to help you choose the
              best solution for your project’s needs. With{" "}
              <span className="text-[#3ecd5e] text-lg transition-colors duration-1000">
                Prisma
              </span>
              , I ensure streamline database integration and ensure type-safe
              queries for smooth data management.
            </p>
          </div>

          <div>
            <div className={styles.choose_body_hvbg}></div>
            <SiFirebase
              className={styles.icon}
              style={{
                color: "#0B8494",
                fontSize: "40px",
                position: "relative",
                zIndex: "2",
              }}
            />
            <h3>Firebase, OAuth, and JWT</h3>
            <p>
              I integrate powerful authentication systems like Firebase, OAuth,
              and JWT to provide secure login and user management solutions for
              your web applications, ensuring both flexibility and scalability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
