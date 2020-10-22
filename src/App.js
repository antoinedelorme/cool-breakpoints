import React from "react";

import { useBreakpoint } from "./breakpoints.js";

const App = () => {
  const breakpoints = useBreakpoint();
  return <div> {bject.keys(breakpoints)}</div>;
};
export default App;
