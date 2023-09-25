// import
import Dashboard from "./Dashboard";
import Tables from "./Tables";
import Profile from "./Profile";
import Schemes from "./GovernmentSchemes/GovernmentSchemes";
import PitchDeckForm from "./PitchDeck/PitchDeckForm";

import { HomeIcon, StatsIcon, PersonIcon } from "./components/Icons/Icons";
import FindInvestor from "./FindInvestors/FindInvestors";
import Workshop from "./Workshops/exploreWorkshops";
import MentorData from "./Mentor/Mentor";
import Post from './CreatePost/Post'
import info from "./Info/Info";

var startupRoutes = [
  {
    path: "/startup/dashboard",
    name: "Dashboard",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
  },
  {
    path: "/startup/guide",
    name: "Guidance",
    icon: <PersonIcon color="inherit" />,
    secondaryNavbar: true,
    component: info,
  },
  {
    path: "/startup/profile",
    name: "Profile",
    icon: <PersonIcon color="inherit" />,
    secondaryNavbar: true,
    component: Profile,
  },
  {
    path: "/startup/govt-schemes",
    name: "Government Schemes",
    icon: <PersonIcon color="inherit" />,
    secondaryNavbar: true,
    component: Schemes,
  },
  {
    path: "/startup/pitchdeck",
    name: "Pitch Deck",
    icon: <PersonIcon color="inherit" />,
    secondaryNavbar: true,
    component: PitchDeckForm,
  },
  {
    path: "/startup/create-posts",
    name: "Posts",
    icon: <PersonIcon color="inherit" />,
    secondaryNavbar: true,
    component: Post,
  },
  {
    path: "/startup/posts",
    name: "View Posts",
    icon: <PersonIcon color="inherit" />,
    secondaryNavbar: true,
    component: Post,
  },
  {
    path: "/startup/find-investor",
    name: "Find Investor",
    icon: <PersonIcon color="inherit" />,
    secondaryNavbar: true,
    component: FindInvestor,
  },
  {
    path: "/startup/mentor",
    name: "Mentors",
    icon: <PersonIcon color="inherit" />,
    secondaryNavbar: true,
    component: MentorData,
  },
  {
    path: "/startup/exploreWorkshop",
    name: "Explore Workshops",
    icon: <PersonIcon color="inherit" />,
    secondaryNavbar: true,
    component: Workshop,
  },
  {
    path: "/startup/news",
    name: "News",
    icon: <PersonIcon color="inherit" />,
    secondaryNavbar: true,
    component: Profile,
  },
  {
    path: "/startup/news",
    name: "News",
    icon: <PersonIcon color="inherit" />,
    secondaryNavbar: true,
    component: Profile,
  },
];
export default startupRoutes;
