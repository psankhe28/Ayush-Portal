import axios from "axios"; // Import axios
import React, { useState } from "react";
import theme from "../../../utils/theme/theme";
import { ChakraProvider, Portal, useDisclosure } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import routes from "../routes.js";
import MainPanel from "../components/Layout/MainPanel";
import PanelContainer from "../components/Layout/PanelContainer";
import PanelContent from "../components/Layout/PanelContent";
import { useToast } from "@chakra-ui/react";

export default function CreatePostForm(props) {
  const { ...rest } = props;
  const [sidebarVariant, setSidebarVariant] = useState("transparent");
  const [fixed, setFixed] = useState(false);
  const { onOpen } = useDisclosure();
  const toast = useToast();

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

  const [post, setPost] = useState({
    title: "",
    text: "",
    category: "",
    photoUrl: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/posts", post, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Post created:", response.data);
  
        // Show a success toast
        toast({
          title: "Post Created",
          description: "Your post has been created successfully.",
          status: "success",
          duration: 5000, // Toast will be displayed for 5 seconds
          isClosable: true,
        });
  
        // Clear field values
        setPost({
          title: "",
          text: "",
          category: "",
          photoUrl: "",
        });
      })
      .catch((error) => {
        console.error("Error creating post:", error);
  
        // Show an error toast
        toast({
          title: "Error",
          description: "An error occurred while creating the post.",
          status: "error",
          duration: 5000, // Toast will be displayed for 5 seconds
          isClosable: true,
        });
      });
  };
  

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
          <PanelContainer style={{ marginTop: "100px" }}>
            <div className="container mx-auto mt-8">
              <h1 className="text-2xl font-semibold mb-4">Create a New Post</h1>
              <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              >
                {/* Title */}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="title"
                  >
                    Title:
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={post.title}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>

                {/* Text */}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="text"
                  >
                    Text:
                  </label>
                  <textarea
                    name="text"
                    value={post.text}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>

                {/* Category */}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="category"
                  >
                    Category:
                  </label>
                  <input
                    type="text"
                    name="category"
                    value={post.category}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                {/* Photo URL */}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="photoUrl"
                  >
                    Photo URL:
                  </label>
                  <input
                    type="text"
                    name="photoUrl"
                    value={post.photoUrl}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                <button
                  type="submit"
                  className="font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  style={{ color: "white",backgroundColor:'black' }}
                >
                  Create Post
                </button>
              </form>
            </div>
          </PanelContainer>
        </PanelContent>
      </MainPanel>
    </ChakraProvider>
  );
}
