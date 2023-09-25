import { useEffect, useState } from "react";

function Card({ text }) {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  // Use a useEffect to reset the displayText when the text prop changes
  useEffect(() => {
    setDisplayText(""); // Clear the displayText when the text prop changes
    setIndex(0); // Reset the index as well
  }, [text]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(index));
        setIndex(index + 1);
      }
    }, 10); // Adjust the delay (in milliseconds) between letters

    return () => {
      clearInterval(timer);
    };
  }, [text, index]);

  return (
    <div className="w-full mx-auto py-4 px-8 flex items-center bg-white rounded-lg shadow-lg">
      <img
        src="https://www.cio.com/wp-content/uploads/2023/08/chatbot_ai_machine-learning_emerging-tech-100778305-orig.jpg?quality=50&strip=all"
        alt="Chatbot"
        width={60}
        height={60}
      />
      <p className="text-md text-black">{displayText}</p>
    </div>
  );
}

export default Card;