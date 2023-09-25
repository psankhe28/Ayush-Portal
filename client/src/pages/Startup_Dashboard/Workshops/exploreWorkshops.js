// Chakra imports
import React, { useState,useEffect } from "react";
import theme from "../../../utils/theme/theme";
import { ChakraProvider, Portal, useDisclosure, Grid } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import routes from "../routes.js";
import MainPanel from "../components/Layout/MainPanel";
import PanelContainer from "../components/Layout/PanelContainer";
import PanelContent from "../components/Layout/PanelContent";
import Api from "../../../utils/Api/Api.js";
import Card from "../../../components/WorkshopCards/workshopCards.js";
import { responseErrorHandler } from "../../../utils/Api/Api.js";
import { toast } from "react-toastify";

export default function Workshop(props) {
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

  const [workshops, setWorkshops] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      const toastElement = toast.loading("Fetching All Campaigns");
      try {
        const response = await Api.workshop.getAllWorkshops();
        setWorkshops(response.data.data);

        toast.update(toastElement, {
          render: "All Workshops Fetched",
          type: "success",
          isLoading: false,
          autoClose: true,
        });
      } catch (error) {
        responseErrorHandler(error, toastElement);
      }
      setIsLoading(false);
    };
    init();
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
          <PanelContainer style={{ marginTop: "50px" }}>
            <Grid templateColumns="repeat(3, 1fr)" gap={3}>
              {workshops.map((workshop, index) => (
                <Card
                  key={index}
                  id={workshop._id}
                  title={workshop.title}
                  links={workshop.links}
                  description={workshop.description}
                  organizer={workshop.organizer}
                  theme={workshop.theme}
                  contact={workshop.contact}
                  imgpath={workshop.imgpath}
                />
              ))}
            </Grid>
          </PanelContainer>
        </PanelContent>
      </MainPanel>
    </ChakraProvider>
  );
}
