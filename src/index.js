import React from "react";
import ReactDOM from "react-dom";
import { BreakpointProvider } from "./breakpoints";

import App from "./App";

const queries = {
  xs: "(max-width: 320px)",
  sm: "(max-width: 720px)",
  md: "(max-width: 1024px)",
  or: "(orientation: portrait)" // we can check orientation also
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <BreakpointProvider queries={queries}>
      <App />
    </BreakpointProvider>
  </React.StrictMode>,
  rootElement
);
