import { Grid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import RightSidebar from "../../components/RightSidebar/RightSidebar.js";
import Feed from "../components/Feed";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar.js";

const YourPosts = () => {
  useEffect(() => {
    document.title = "Bharatpreneur - YourPosts";
  }, []);
  return (
    <div>
      <Navbar />
      <Grid
        gridTemplateColumns="22vw auto 24vw"
        columnGap="2rem"
        marginLeft="1rem"
        marginRight="1rem"
      >
        <RightSidebar />
        <Feed
          isExplore={false}
          isLibrary={false}
          isYourPosts={true}
          isSearch={false}
          isProfile={false}
          isFollower={false}
        />
        <LeftSidebar />
      </Grid>
    </div>
  );
};

export default YourPosts;
