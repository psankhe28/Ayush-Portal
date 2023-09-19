import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";

import { Home, Chat } from "./pages";
import YetToBeDone from "./pages/YetToBeDone";
import Bot from "./pages/chatbot/Bot";

import LandingPg from "./pages/LandingPg";
import PitchDeckForm from "./pages/Startup_Dashboard/PitchDeck/PitchDeckForm";
import Schemes from "./pages/Startup_Dashboard/GovernmentSchemes/GovernmentSchemes";
import FindInvestor from "./pages/Startup_Dashboard/FindInvestors/FindInvestors";
import Workshop from "./pages/Startup_Dashboard/Workshops/exploreWorkshops";
import StartupDashboard from "./pages/Startup_Dashboard/Dashboard/index";
import StartupProfile from "./pages/Startup_Dashboard/Profile";
import News from "./pages/Startup_Dashboard/News/News";

import InvestorDashboard from "./pages/Investor_Dashboard/Dashboard/index";
import InvestorProfile from "./pages/Investor_Dashboard/Profile";

import CreateWorkshop from "./pages/CreateWorkshop/CreateWorkshop";
import Post from "./components/Post/Post";

function App() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPg />} />
          <Route path="/login" element={<Home />} />
          <Route path="/investor/dashboard" element={<InvestorDashboard />} />
          <Route path="/investor/profile" element={<InvestorProfile />} />
          <Route path="/startup/dashboard" element={<StartupDashboard />} />
          <Route path="/startup/profile" element={<StartupProfile />} />
          <Route path="/startup/pitchdeck" element={<PitchDeckForm />} />
          <Route path="/startup/govt-schemes" element={<Schemes />} />
          <Route path="/startup/exploreWorkshop" element={<Workshop />} />
          <Route path="/startup/find-investor" element={<FindInvestor />} />
          <Route path="/startup/news" element={<News />} />{" "}
          <Route
            path="/incubator/createWorkshop"
            element={<CreateWorkshop />}
          />
          <Route path="/posts" element={<Post />} />
          <Route path="/chats" element={<Chat />} />
          <Route path="/bot" element={<Bot />} />
          <Route path="/yettobedone" element={<YetToBeDone />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
