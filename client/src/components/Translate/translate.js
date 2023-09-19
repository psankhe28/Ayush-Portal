// import { useEffect } from "react";

// const Translate = () => {
//   useEffect(() => {
//     const initializeGoogleTranslate = () => {
//       new window.google.translate.TranslateElement(
//         {
//           pageLanguage: "en",
//           includedLanguages: "hi,ta,te,kn,ml,pa,gu,bn,or,ur,mai,sa,sat,kok,chr,kha,doi,mni,sit,am",
//           autoDisplay: false
//         },
//         "google_translate_element"
//       );
//     };

//     // Check if the google.translate.TranslateElement is available
//     if (window.google && window.google.translate && window.google.translate.TranslateElement) {
//       initializeGoogleTranslate();
//     } else {
//       // If not available, dynamically load the Google Translate API script
//       const script = document.createElement("script");
//       script.src = "https://translate.google.com/translate_a/element.js?cb=initializeGoogleTranslate";
//       script.async = true;
//       document.body.TranslateendChild(script);
//     }
//   }, []);

//   return (
//     <>
//       <div id="google_translate_element"></div>
//     </>
//   );
// };

// export default Translate;

import React from 'react'

const Translate = () => {
  return (
    <div>translate</div>
  )
}

export default Translate