import React, { useState, useEffect } from "react";
import theme from "../../../utils/theme/theme";
import {
  ChakraProvider,
  Portal,
  useDisclosure,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
} from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import routes from "../routes.js";
import MainPanel from "../components/Layout/MainPanel";
import PanelContainer from "../components/Layout/PanelContainer";
import PanelContent from "../components/Layout/PanelContent";
import Papa from "papaparse";

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
  const [showTable, setShowTable] = useState(false); // State to control table visibility
  Papa.parse(
    // "https://docs.google.com/spreadsheets/d/e/2PACX-1vQEN31YU4jB_-hIetzeK6n3uMyneLuoClvaEZfzhRK9SqWxFe9YGpflCk9LgR3f-Kjg9tlYT_8TJUGD/pub?output=csv",
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSke_rQWVlVcI8TGf67ghM6VR_gOhL0SbZeYysoLjYczMOjAF8FJKa-VCn-yeI5tw_Qv8lQyzJ5axN3/pub?output=csv",
    {
      download: true,
      header: true,
      complete: (results) => {
        setData(results.data);
      },
    }
  );
  const mentors = Array.from(data);

  const handleShowTable = () => {
    setShowTable(!showTable);
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
            {!showTable && (
              <Button
                onClick={handleShowTable}
                colorScheme="blue"
                size="lg"
                mx="auto"
                display="block"
                my={4}
              >
                Recommend Mentors
              </Button>
            )}
            {showTable && (
              <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
                Mentors
              </h1>
            )}
            <br/><br/><br/>
            {showTable && (
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Identity</Th>
                    <Th>Domain</Th>
                    <Th>Experience</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {mentors.map((data, index) => (
                    <Tr key={index}>
                      <Td>{data.Name}</Td>
                      <Td>{data.Identity}</Td>
                      <Td>{data.Domain}</Td>
                      <Td>{data.Experience}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            )}
          </PanelContainer>
        </PanelContent>
      </MainPanel>
    </ChakraProvider>
  );
}
