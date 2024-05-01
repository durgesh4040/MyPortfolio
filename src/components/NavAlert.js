import React from "react";
import { Link } from "react-router-dom";

export const NavAlert = () => {
  return (
    <section className="nav-alert">
      <span>
        🚀 Looking to hire a FullStack Developer? Please review{" "}
        <Link to="/links">my resume</Link>
      </span>
    </section>
  );
};
