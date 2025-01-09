import React, { useState } from "react";
import SidenavContext from "./sidenavContext";

const SidenavState = (props) => {
  const [showSideNav, setShowSideNav] = useState(true);

  return (
    <SidenavContext.Provider value={{ showSideNav, setShowSideNav }}>
      {props.children}
    </SidenavContext.Provider>
  );
};

export default SidenavState;
