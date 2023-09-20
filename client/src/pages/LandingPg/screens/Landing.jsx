import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Features from "../components/Sections/Features";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";
import Eligibility from "../components/Eligibility";
import { useEffect } from "react";
import "./Landing.css"

export default function Landing() {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: "hi,ta,te,kn,ml,pa,gu,bn,or,ur,mai,sa,sat,kok,chr,kha,doi,mni,sit,am,mr,en",
        autoDisplay: false,
      },
      "google_translate_element"
    );
  };
  


  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  return (
    <div
      className="landing"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <TopNavbar />
      <div id="google_translate_element"></div>
      <Header />
      <Features />
      <Eligibility />
      {/* <Projects /> */}
      {/* <Blog /> */}
      {/* <Pricing /> */}
      <Contact />
      <Footer />
    </div>
  );
}
