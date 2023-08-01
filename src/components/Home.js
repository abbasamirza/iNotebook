import React from "react";
import Notes from "./Notes";

const Home = () => {
  return (
    <>
      <div className="container" style={{ marginTop: "80px" }}>
        <h1 className="text-center">Add a new note</h1>
      </div>
      <div className="container">
        <Notes />
      </div>
    </>
  );
};
export default Home;
