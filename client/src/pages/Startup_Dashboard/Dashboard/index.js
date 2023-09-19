// Chakra imports
import {
  Flex,
  Grid,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// assets
import BarChart from "../components/Charts/BarChart";
import LineChart from "../components/Charts/LineChart";
// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "./../components/Icons/Icons.js";
import React, { useState } from "react";
import { dashboardTableData, timelineData } from "../variables/general";
import ActiveUsers from "./components/ActiveUsers";
import MiniStatistics from "./components/MiniStatistics";
import OrdersOverview from "./components/OrdersOverview";
import Projects from "./components/Projects";
import SalesOverview from "./components/SalesOverview";
import theme from "../../../utils/theme/theme";
import { ChakraProvider, Portal, useDisclosure } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import routes from "../routes.js";
import MainPanel from "../components/Layout/MainPanel";
import PanelContainer from "../components/Layout/PanelContainer";
import PanelContent from "../components/Layout/PanelContent";
import AdminNavbar from "../components/Navbars/AdminNavbar.js";

export default function Dashboard(props) {
  const { ...rest } = props;
  const iconBoxInside = useColorModeValue("white", "white");
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
  const getRoute = () => {
    return window.location.pathname !== "/admin/full-screen-maps";
  };
  return (
    <ChakraProvider theme={theme} resetCss={false}>
      <Sidebar
        routes={routes}
        logoText={"AYUSH"}
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
        <Portal>
          <AdminNavbar
            onOpen={onOpen}
            logoText={"AYUSH PORTAL"}
            brandText={getActiveRoute(routes)}
            secondary={getActiveNavbar(routes)}
            fixed={fixed}
            {...rest}
          />
        </Portal>
        {getRoute() ? (
          <PanelContent>
            <PanelContainer>
              <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
                <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing="24px">
                  <MiniStatistics
                    title={"Today's Moneys"}
                    amount={"$53,000"}
                    percentage={55}
                    icon={
                      <WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />
                    }
                  />
                  <MiniStatistics
                    title={"Today's Users"}
                    amount={"2,300"}
                    percentage={5}
                    icon={
                      <GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />
                    }
                  />
                  <MiniStatistics
                    title={"New Clients"}
                    amount={"+3,020"}
                    percentage={-14}
                    icon={
                      <DocumentIcon
                        h={"24px"}
                        w={"24px"}
                        color={iconBoxInside}
                      />
                    }
                  />
                  <MiniStatistics
                    title={"Total Sales"}
                    amount={"$173,000"}
                    percentage={8}
                    icon={
                      <CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />
                    }
                  />
                </SimpleGrid>
                <Grid
                  templateColumns={{ sm: "1fr", lg: "1.3fr 1.7fr" }}
                  templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}
                  gap="24px"
                  mb={{ lg: "26px" }}
                >
                  <ActiveUsers
                    title={"Active Users"}
                    percentage={23}
                    chart={<BarChart />}
                  />
                  <SalesOverview
                    title={"Sales Overview"}
                    percentage={5}
                    chart={<LineChart />}
                  />
                </Grid>
                <Grid
                  templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "2fr 1fr" }}
                  templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}
                  gap="24px"
                >
                  <Projects
                    title={"Projects"}
                    amount={30}
                    captions={["Companies", "Members", "Budget", "Completion"]}
                    data={dashboardTableData}
                  />
                  <OrdersOverview
                    title={"Orders Overview"}
                    amount={30}
                    data={timelineData}
                  />
                </Grid>
              </Flex>
            </PanelContainer>
          </PanelContent>
        ) : null}
      </MainPanel>
    </ChakraProvider>
  );
}
