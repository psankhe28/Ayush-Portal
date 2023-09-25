// import
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Post from './Posts/Posts'

import { HomeIcon, StatsIcon, PersonIcon } from "./components/Icons/Icons";

var dashRoutes = [
  {
    path: "/investor/dashboard",
    name: "Dashboard",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
  },
  {
    path: "/investor/profile",
    name: "Profile",
    icon: <PersonIcon color="inherit" />,
    secondaryNavbar: true,
    component: Profile,
  },
  {
    path: "/investor/posts",
    name: "View Posts",
    icon: <PersonIcon color="inherit" />,
    secondaryNavbar: true,
    component: Post,
  },
];
export default dashRoutes;
