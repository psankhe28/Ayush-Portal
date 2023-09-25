import {
  Container,
  Box,
  Text,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Login, Signup } from "../components";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (!userInfo) {
      console.log("User is not logged in. Redirecting to /login");
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Container maxWidth="xl">
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="https://bsmedia.business-standard.com/_media/bs/img/misc/2022-12/08/full/pm-modi-1670510641-43153510.jpg?im=FeatureCrop,size=(1200,900)"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="none"
      ></Box>
      <Box
        bg="white"
        w="70%"
        margin="auto"
        background="#7620FF"
        p={4}
        borderRadius="lg"
        borderWidth="1px"
      >
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em" margin="1rem">
            <Tab background="white" padding="10px" margin="6px">
              Login
            </Tab>
            <Tab background="white" padding="10px" margin="6px">
              Sign Up
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Home;
