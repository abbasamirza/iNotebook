import React from "react";
import Sidenav from "./Sidenav";
import NoteBody from "./NoteBody";
import Topnav from "./Topnav";

const Main = () => {
  return (
    <>
      <Sidenav />
      <Topnav />
      <NoteBody />
    </>
  );
};

export default Main;
