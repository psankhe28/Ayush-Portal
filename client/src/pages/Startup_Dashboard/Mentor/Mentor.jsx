// Chakra imports
import React, { useState, useEffect } from "react";
import theme from "../../../utils/theme/theme";
import { ChakraProvider, Portal, useDisclosure, Grid } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import routes from "../routes.js";
import MainPanel from "../components/Layout/MainPanel";
import PanelContainer from "../components/Layout/PanelContainer";
import PanelContent from "../components/Layout/PanelContent";
import AdminNavbar from "../components/Navbars/AdminNavbar.js";
import Papa from "papaparse";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

export default function MentorData(props) {
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

  const [data, setData] = useState({});
  Papa.parse(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQEN31YU4jB_-hIetzeK6n3uMyneLuoClvaEZfzhRK9SqWxFe9YGpflCk9LgR3f-Kjg9tlYT_8TJUGD/pub?output=csv",
    {
      download: true,
      header: true,
      complete: (results) => {
        setData(results.data);
      },
    }
  );
  const mentors = Array.from(data);

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
        <PanelContent>
          <PanelContainer style={{ marginTop: "100px" }}>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Mentor</Th>
                  <Th>Mentees</Th>
                  <Th>Domain</Th>
                </Tr>
              </Thead>
              <Tbody>
                {mentors.map((data, index) => (
                  <Tr key={index}>
                    <Td>{data.Mentors}</Td>
                    <Td>{data.Mentees}</Td>
                    <Td>{data.Domain}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </PanelContainer>
        </PanelContent>
      </MainPanel>
    </ChakraProvider>
  );
}
