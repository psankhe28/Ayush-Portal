// import
import Dashboard from "./Dashboard";
import Tables from "./Tables";
import Profile from "./Profile";

import {
  HomeIcon,
  StatsIcon,
  PersonIcon
} from "./components/Icons/Icons";

var dashRoutes = [
  {
    path: "/investor/dashboard",
    name: "Dashboard",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard
  },
  {
    path: "/investor/a",
    name: "Tables",
    icon: <StatsIcon color="inherit" />,
    component: Tables  },
  {
    name: "ACCOUNT PAGES",
    category: "account",
    state: "pageCollapse",
    views: [
      {
        path: "/investor/profile",
        name: "Profile",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Profile,
      }
    ],
  },
];
export default dashRoutes;
