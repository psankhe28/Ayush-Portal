import React, { useEffect } from "react";
import TopNavbar from "../components/Nav/TopNavbar";
import Features from "../components/Sections/Features";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";
import Blog from "../components/Sections/Blog";
import Projects from "../components/Sections/Projects";
import Eligibility from "../components/Sections/Eligibility";
import Carousel from "../components/Sections/Carousel";
import DialogEn from "../../Homechatbot/DialogEn";

import "./Landing.css";

export default function Landing() {
  // useEffect(() => {
  //   const googleTranslateElementInit = () => {
  //     new window.google.translate.TranslateElement(
  //       {
  //         pageLanguage: "en",
  //         includedLanguages: "en,hi,bn,ta,te,kn,ml,gu,mr,pa,ur",
  //         layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
  //       },
  //       "google_translate_element"
  //     );
  //   };

  //   // Define a callback function for JSONP
  //   window.googleTranslateElementInit = googleTranslateElementInit;

  //   // Create a script element for Google Translate API using JSONP
  //   const script = document.createElement("script");
  //   script.src = `https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`;
  //   script.async = true;
  //   script.defer = true;

  //   script.onerror = () => {
  //     console.error("Failed to load Google API script.");
  //   };

  //   document.body.appendChild(script);

  //   return () => {
  //     // Clean up the callback function when the component unmounts
  //     delete window.googleTranslateElementInit;
  //   };
  // }, []);

  return (
    <div
      className="landing"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <DialogEn />
      <TopNavbar />
      {/* <br/><br/><br/><br/>
      <div id="google_translate_element"></div> */}
      <Carousel/>
      {/* <Header /> */}
      <Features />
      <Eligibility />
      {/* <Projects />
      <Blog /> */}
      <Contact />
      <Footer />
    </div>
  );
}
