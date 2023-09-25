// Chakra imports
import {useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";
import theme from "../../../utils/theme/theme";
import { ChakraProvider, Portal, useDisclosure } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import routes from "../routes.js";
import MainPanel from "../components/Layout/MainPanel";
import PanelContainer from "../components/Layout/PanelContainer";
import PanelContent from "../components/Layout/PanelContent";
import { useSelector, useDispatch } from "react-redux";
import { removeTile, updatePitch } from "./app/pitchdeckSlice";
import { formSections, fields } from "./app/pitchdeckFields";
import { PitchDeck } from "./PitchDeck";

const selectField = (field) => {
  switch (field) {
    case 4:
      return "problems";
    case 8:
      return "solution";
    case 10:
      return "marketValidation";
    case 13:
      return "marketSize";
    case 17:
      return "product";
    case 20:
      return "businessModel";
    case 23:
      return "competition";
    case 26:
      return "competitiveAdvantage";
    default:
      break;
  }
};

const MultipleFields = ({ field, key }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.pitchdeck);
  const [error, setError] = useState(false);
  console.log(selectField(field[0]), formData[selectField(field[0])]);
  const add = () => {
    let object = {};
    let count = 0;
    console.log(field);
    field.forEach((x) => {
      if (formData[fields[x]["id"]] === "") {
        count++;
        setError(true);
      }
      object[fields[x]["id"]] = formData[fields[x]["id"]];
    });
    console.log(selectField(field[0]), object);
    if (count === 0) {
      setError(false);
      dispatch(updatePitch([selectField(field[0]), object]));
    }
  };
  return (
    <div key={key}>
      {formData[selectField(field[0])].map((x, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            padding: "8px",
            backgroundColor: "#a3a3a3", // Add your desired background color
            margin: "8px",
            borderRadius: "8px", // Add your desired border radius
          }}
        >
          <h1>{i + 1}.</h1>
          {Object.values(x).map((data, j) => (
            <h1 key={j}>{data}</h1>
          ))}
          <button
            style={{
              backgroundColor: "red",
              padding: "4px",
              fontSize: "16px",
              borderRadius: "4px", // Add your desired border radius
            }}
            onClick={() => {
              dispatch(removeTile([selectField(field[0]), i]));
            }}
          >
            Delete
          </button>
        </div>
      ))}
      {field.map((x) => (
        <div key={x} style={{ display: "flex", alignItems: "end", gap: "8px" }}>
          <h1 style={{ fontSize: "18px" }}>{fields[x]["title"]} :</h1>
          <input
            type="text"
            required
            value={formData[fields[x]["id"]]}
            onChange={(e) =>
              dispatch(updatePitch([fields[x]["id"], e.target.value]))
            }
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
      ))}
      {error && <h1 style={{ color: "red" }}>Please fill all fields</h1>}
      <button
        style={{
          marginTop: "8px",
          width: "100%",
          backgroundColor: "#a3a3a3",
          color: "white",
          padding: "12px",
          borderRadius: "8px",
        }}
        onClick={() => add()}
      >
        Add
      </button>
    </div>
  );
};

export default function Pitch(props) {
  const { ...rest } = props;
  const [sidebarVariant, setSidebarVariant] = useState("transparent");
  const [fixed, setFixed] = useState(false);
  const {onOpen} = useDisclosure();

  const dispatch = useDispatch();
  const formData = useSelector((state) => state.pitchdeck);

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
            <div
              style={{
                maxWidth: "80%",
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h1
                style={{
                  fontSize: "30px",
                  margin: "4%",
                  fontWeight: "bold",
                  color: "#000",
                }}
              >
                Pitch Deck Details
              </h1>
              <div
                style={{
                  backgroundColor: "#eee",
                  padding: "16px",
                  borderRadius: "8px",
                  boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                  width: "100%",
                  marginBottom: "20px",
                }}
              >
                {Object.entries(formSections).map(([key, value]) => (
                  <div className="my-4" key={key}>
                    <h1 className="text-2xl font-semibold">{key} :</h1>
                    {value.map((field, index) =>
                      Array.isArray(field) ? (
                        <MultipleFields key={index} field={field} />
                      ) : (
                        <div className="flex items-end gap-2" key={field}>
                          <h1 className="text-lg">{fields[field].title} :</h1>
                          <input
                            type="text"
                            required
                            value={formData[fields[field].id]}
                            onChange={(e) =>
                              dispatch(
                                updatePitch([
                                  fields[field].id,
                                  e.target.value,
                                ])
                              )
                            }
                            className="w-auto px-2 py-1 border border-gray-300 rounded"
                          />
                        </div>
                      )
                    )}
                  </div>
                ))}
              </div>
              <PitchDeck />
            </div>
          </PanelContainer>
        </PanelContent>
      </MainPanel>
    </ChakraProvider>
  );
}
