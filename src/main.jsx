/*import React from "react";
import ReactDOM from "react-dom/client";*/
import App from "./App";
import "./index.css";

import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";

/*ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
