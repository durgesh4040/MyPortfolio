import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import pages
import { HomePage, ContactPage, ProjectsPage, ErrorPage, Links } from "./pages";
// import components
import { Head, Contact, Footer, Widget, ScrollToTop } from "./components";

const App = () => {
  return (
    <main>
      <Router>
        <ScrollToTop />
        <Head />
        <Routes>
          {" "}
          {/* Changed from Switch to Routes */}
          <Route path="/" element={<HomePage />} />{" "}
          {/* Use element instead of children */}
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/links" element={<Links />} />
          <Route path="*" element={<ErrorPage />} />{" "}
          {/* Wildcard route for 404 */}
        </Routes>
        <Contact />
        <Footer />
      </Router>
    </main>
  );
};

export default App;
