// Chakra imports
import React, { useState } from "react";
import theme from "../../../utils/theme/theme";
import { ChakraProvider, Portal, useDisclosure } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import routes from "../routes.js";
import MainPanel from "../components/Layout/MainPanel";
import PanelContainer from "../components/Layout/PanelContainer";
import PanelContent from "../components/Layout/PanelContent";
import { Grid } from "@chakra-ui/react";
import Card from "../../../components/UserCard/UserCard";

export default function Schemes(props) {
  const { ...rest } = props;
  const [sidebarVariant, setSidebarVariant] = useState("transparent");
  const [fixed, setFixed] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          <PanelContainer style={{ marginTop: "50px" }}>
            <Grid templateColumns="repeat(3, 1fr)" gap={3}>
              <Card
                img="https://thumbs.dreamstime.com/b/professional-investor-advise-investment-use-green-growth-graph-bar-graph-hold-paper-pencil-coins-98478183.jpg"
                name="Yash Patil"
                desc="I invest in innovative fintech startups to drive financial technology advancements and capitalize on the evolving financial services landscape."
              />
              <Card
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuo1y2Gg2t8jXwKBBdLzexnf3nCW8jAW-42w&usqp=CAU"
                name="Aditya Yadav"
                desc="With a decade of experience in the healthcare sector, I invest in cutting-edge medical technology startups to revolutionize patient care and improve healthcare outcomes."
              />
              <Card
                img="https://www.bankrate.com/2022/09/01163449/women-and-investing.jpeg?auto=webp&optimize=high&crop=16:9"
                name="Riya Shah"
                desc="Leveraging my background in renewable energy, I invest in sustainable energy solutions to combat climate change and create a more environmentally conscious future."
              />
            </Grid>
          </PanelContainer>
        </PanelContent>
      </MainPanel>
    </ChakraProvider>
  );
}
