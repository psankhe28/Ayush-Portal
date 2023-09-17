import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Chat } from "./pages";
import Startup from "./pages/Startup";

import "./App.css";
import Bot from "./pages/chatbot/Bot";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chats" element={<Chat />} />
        <Route path="/bot" element={<Bot />} />
        <Route path="/home" element={<Startup />} />

        {/* If the user enters an invalid path in the URL it automatically redirects them to the homepage */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;
