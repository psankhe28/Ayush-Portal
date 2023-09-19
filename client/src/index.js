import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./pages/Startup_Dashboard/PitchDeck/app/store";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./utils/theme/theme";
import ChatProvider from "./context/ChatProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme} resetCss={false}>
        <Provider store={store}>
          <ChatProvider>
            <App />
          </ChatProvider>
        </Provider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
