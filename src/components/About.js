import React from "react";
import profileImg from "../images/about/about-img.PNG";
import { FaCode, FaServer, FaDatabase, FaCloud } from "react-icons/fa";

export const About = () => {
  return (
    <section
      id="about"
      className="section about"
      style={{ background: "#f5f5f5" }}
    >
      <div className="section-title">
        <h2>
          About <span>Me</span>
        </h2>
        <div className="underline"></div>
      </div>
      <div className="section-center about-center">
        <div className="about-img">
          <img
            src={profileImg}
            alt="Profile Picture"
            className="about-image"
            loading="lazy"
            style={{ borderRadius: "50%", width: "150px", height: "150px" }}
          />
        </div>
        <div className="about-info">
          <p>
            I'm a <strong>Full-Stack Developer</strong> with a passion for
            creating clean, efficient, and maintainable code. I specialize in
            building applications with a strong focus on both back-end
            robustness and front-end user experience.
          </p>
          <p>
            I believe in teamwork, continuous learning, and following best
            practices to deliver top-quality projects.
          </p>
          <h3>Skill Set</h3>
          <div className="skills">
            <ul>
              <li>
                <FaCode /> <strong>Languages:</strong> Java, C++, JavaScript
              </li>
              <li>
                <FaServer /> <strong>Frameworks & Libraries:</strong> Spring
                Boot, React.js
              </li>
              <li>
                <strong>Tools:</strong> Postman, Docker, Git
              </li>
              <li>
                <FaDatabase /> <strong>Database:</strong> MySQL, MongoDB
              </li>
              <li>
                <FaCloud /> <strong>Cloud Providers:</strong> Firebase, Railway,
                Vercel
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
