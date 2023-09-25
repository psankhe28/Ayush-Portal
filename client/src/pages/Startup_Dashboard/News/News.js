// Chakra imports
import React, { useState,useEffect } from "react";
import { ChakraProvider, Portal, useDisclosure ,useColorModeValue} from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import routes from "../routes.js";
import MainPanel from "../components/Layout/MainPanel";
import PanelContainer from "../components/Layout/PanelContainer";
import PanelContent from "../components/Layout/PanelContent";
import theme from "../../../utils/theme/theme";
import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Link,
  Divider,
  CardMedia,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "animate.css";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  icon: {
    marginRight: theme.spacing(2),
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    border: "4px solid #fff",
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const LoadingCards = ({ loading }) => {
    return (
      <div>
        <h1 className="animate__animated animate__bounce animate__delay-.2s animate__infinite">
          {loading}
        </h1>
        <br />
      </div>
    );
  };
  
  const NewsCards = ({ cards, classes }) => {
    return (
      <Grid container spacing={6}>
        {cards.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Link
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={card.urlToImage}
                  title={card.title}
                />
  
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="h1"
                    style={{ fontWeight: "bold", fontSize: "20px" }}
                  >
                    {card.title}
                  </Typography>
                  <Divider />
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h5"
                    style={{ fontSize: "16px" }}
                  >
                    {card.description}
                  </Typography>
                  <span style={{ textAlign: "center", fontWeight: "bold" }}>
                    Source: {card.source.name}
                  </span>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    );
  };
  

function News(props) {
  // Chakra color mode
  const classes = useStyles();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState("Loading......");
  async function fetchNews() {
    setLoading(true);
    try {
      const apiKey = "225aef1d160849458d22826e4e2ebab8";
      const country = "in";

      const apiUrl = `https://newsapi.org/v2/top-headlines?category=business&country=${country}&apiKey=${apiKey}`;

      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(
          `Failed to fetch news data. Status: ${response.status}`
        );
      }

      const data = await response.json();
      console.log(data)
      const newsCards = data.articles;
      setCards(newsCards);
    } catch (error) {
      return null;
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchNews();
    console.log(cards)
  }, []);

  const textColor = useColorModeValue("gray.700", "white");
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );
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
          <PanelContainer>
           <Container className={classes.cardGrid}>
      <Typography gutterBottom align="center" style={{ color: "black",fontSize:"20px",fontWeight:"bold" }}>
        NEWS
      </Typography>
      {cards.length === 0 ? (
        <LoadingCards loading={loading} />
      ) : (
        <NewsCards cards={cards} classes={classes} />
      )}
    </Container>
          </PanelContainer>
        </PanelContent>
      </MainPanel>
    </ChakraProvider>
  );
}

export default News;
