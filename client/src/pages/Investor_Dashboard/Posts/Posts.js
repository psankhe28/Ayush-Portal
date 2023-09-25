import axios from "axios"; // Import axios
import React, { useState, useEffect } from "react";
import theme from "../../../utils/theme/theme";
import { ChakraProvider, Portal, useDisclosure } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import routes from "../routes.js";
import MainPanel from "../components/Layout/MainPanel";
import PanelContainer from "../components/Layout/PanelContainer";
import PanelContent from "../components/Layout/PanelContent";

export default function Posts(props) {
  const { ...rest } = props;
  const [sidebarVariant, setSidebarVariant] = useState("transparent");
  const [fixed, setFixed] = useState(false);
  const { onOpen } = useDisclosure();

  const getActiveRoute = (routes) => {
    let activeRoute = "Default Brand Text";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else if (routes[i].category) {
        let categoryActiveRoute = getActiveRoute(routes[i].views);
        if (categoryActiveRoute !== activeRoute) {
          return categoryActiveRoute;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };
  // This changes navbar state(fixed or not)
  const getActiveNavbar = (routes) => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].category) {
        let categoryActiveNavbar = getActiveNavbar(routes[i].views);
        if (categoryActiveNavbar !== activeNavbar) {
          return categoryActiveNavbar;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          if (routes[i].secondaryNavbar) {
            return routes[i].secondaryNavbar;
          }
        }
      }
    }
    return activeNavbar;
  };

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from your backend API
    axios.get("http://localhost:8000/api/posts").then((response) => {
      setPosts(response.data.data);
      console.log(response.data.data);
    });
  }, []);

  return (
    <ChakraProvider theme={theme} resetCss={false}>
      <Sidebar
        routes={routes}
        logoText={"AYUSH PORTAL"}
        display="none"
        sidebarVariant={sidebarVariant}
        {...rest}
      />
      <MainPanel
        w={{
          base: "100%",
          xl: "calc(100% - 275px)",
        }}
      >
        <PanelContent>
          <PanelContainer className="mt-10">
            <div className="container mx-auto mt-8">
              <h1 className="text-2xl font-semibold mb-4 mt-8 text-center">Posts</h1>
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="mb-8 p-6 bg-white shadow-md rounded-lg"
                  >
                    <h2 className="text-xl font-semibold mb-4">{post.title}</h2>
                    <p className="text-gray-700 mb-4">{post.text}</p>
                    <div className="w-full h-48 overflow-hidden rounded-lg">
                      <img
                        src={post.photoUrl}
                        alt=""
                        className="w-full h-full object-cover"
                      />{" "}
                    </div>
                    {/* <p className="text-gray-500 mt-4">
                      Category: {post.category}
                    </p> */}
                  </li>
                ))}
              </ul>
            </div>
          </PanelContainer>
        </PanelContent>
      </MainPanel>
    </ChakraProvider>
  );
}
