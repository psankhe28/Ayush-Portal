// Chakra imports
import { Flex, Grid, useColorModeValue } from "@chakra-ui/react";
import avatar4 from "../assets/img/avatars/avatar4.png";
import ProfileBgImage from "../assets/img/ProfileBackground.png";
import React, { useState, useEffect } from "react";
import { FaCube, FaPenFancy } from "react-icons/fa";
import { IoDocumentsSharp } from "react-icons/io5";
import Conversations from "./components/Conversations";
import Header from "./components/Header";
import ProfileInformation from "./components/ProfileInformation";
import Projects from "./components/Projects";
import { ChakraProvider, Portal, useDisclosure } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import routes from "../routes.js";
import MainPanel from "../components/Layout/MainPanel";
import PanelContainer from "../components/Layout/PanelContainer";
import PanelContent from "../components/Layout/PanelContent";
import theme from "../../../utils/theme/theme";
import axios from "axios";

function Profile(props) {
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );
  const { ...rest } = props;
  const [sidebarVariant, setSidebarVariant] = useState("transparent");
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [avatarImage, setAvatarImage] = useState("");

  useEffect(() => {
    const generateAIImage = async () => {
      try {
        const response = await axios.post("http://localhost:5000/api/image", {
          prompt: `a investor named ${userInfo.name}`,
          size: "1024x1024",
        });

        const imageUrl = response.data.imageUrl;
        setAvatarImage(imageUrl);
        console.log(imageUrl)
      } catch (error) {
        console.error("Error generating AI image:", error);
      }
    };

    generateAIImage();
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
          <PanelContainer>
            <Flex direction="column">
              <Header
                backgroundHeader={ProfileBgImage}
                backgroundProfile={bgProfile}
                avatarImage={
                  avatarImage
                    ? { avatarImage }
                    : "https://c8.alamy.com/comp/2CBA2G6/investor-icon-simple-element-from-investment-collection-creative-investor-icon-for-web-design-templates-infographics-and-more-2CBA2G6.jpg"
                }
                name={userInfo.name}
                email={userInfo.email}
                tabs={[
                  {
                    name: "OVERVIEW",
                    icon: <FaCube w="100%" h="100%" />,
                  },
                  {
                    name: "TEAMS",
                    icon: <IoDocumentsSharp w="100%" h="100%" />,
                  },
                  {
                    name: "PROJECTS",
                    icon: <FaPenFancy w="100%" h="100%" />,
                  },
                ]}
              />
              <Grid
                templateColumns={{ sm: "1fr", xl: "repeat(3, 1fr)"   }}
                gap="22px"
              >
                <ProfileInformation
                  title={"Profile Information"}
                  description={
                    "Hi, I’m Esthera Jackson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
                  }
                  name={userInfo.name}
                  email={userInfo.email}
                  location={"India"}
                />
                {/* <Conversations title={"Conversations"} /> */}
              </Grid>
            </Flex>
          </PanelContainer>
        </PanelContent>
      </MainPanel>
    </ChakraProvider>
  );
}

export default Profile;
