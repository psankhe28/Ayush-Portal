import React, { useEffect } from "react";
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Features from "../components/Sections/Features";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";
import Pricing from "../components/Sections/Pricing";
import Blog from "../components/Sections/Blog";
import Projects from "../components/Sections/Projects";
import Eligibility from "../components/Sections/Eligibility";
import "./Landing.css";

export default function Landing() {
  useEffect(() => {
    const googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi,bn,ta,te,kn,ml,gu,mr,pa,ur",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
        },
        "google_translate_element"
      );
    };

    // Define a callback function for JSONP
    window.googleTranslateElementInit = googleTranslateElementInit;

    // Create a script element for Google Translate API using JSONP
    const script = document.createElement("script");
    script.src = `https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`;
    script.async = true;
    script.defer = true;

    script.onerror = () => {
      console.error("Failed to load Google API script.");
    };

    document.body.appendChild(script);

    return () => {
      // Clean up the callback function when the component unmounts
      delete window.googleTranslateElementInit;
    };
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
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
