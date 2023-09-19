import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Features from "../components/Sections/Features";
import Projects from "../components/Sections/Projects";
import Blog from "../components/Sections/Blog";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";
import Eligibility from "../components/Eligibility";

export default function Landing() {
  return (
    <div
      className="landing"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <TopNavbar />
      <Header />
      <Features />
      <Eligibility />
      <Projects />
      <Blog />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
