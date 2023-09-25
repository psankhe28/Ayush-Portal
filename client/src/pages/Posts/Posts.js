import axios from "axios";
import React, { useState, useEffect } from "react";
import theme from "../../utils/theme/theme";
import { ChakraProvider } from "@chakra-ui/react";
import MainPanel from "../Investor_Dashboard/components/Layout/MainPanel";
import PanelContainer from "../Investor_Dashboard/components/Layout/PanelContainer";
import PanelContent from "../Investor_Dashboard/components/Layout/PanelContent";
import { Link } from "react-router-dom";

export default function Posts() {
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
      <MainPanel
        w={{
          base: "100%",
        }}
      >
        <PanelContent>
          <PanelContainer className="mt-10">
            <div className="container mx-auto mt-8">
              <Link to="/" className="text-white font-bold py-2 px-4 rounded" style={{backgroundColor:'black'}}>
                Go Back
              </Link>
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
                      />
                    </div>
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
