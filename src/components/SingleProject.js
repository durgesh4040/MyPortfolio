import React from "react";
import { FaGithub } from "react-icons/fa";

const SingleProject = ({ title, imgUrl, url, github, stack }) => {
  return (
    <article className="single-project">
      <div className="single-project-img">
        <img src={imgUrl} alt={title} className="single-project-image" />
      </div>
      <div className="single-project-info">
        <h4 className="single-project-title">{title || "Loading..."}</h4>
        <div
          className="single-project-footer"
          style={{
            justifyContent: `${stack === "freelance" ? "center" : null}`,
          }}
        >
          {stack !== "freelance" && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              title="GitHub Code"
            >
              <FaGithub className="fa" /> <span>code</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default SingleProject;
