import "../styles/css/Sidenav.css";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Notes from "./Notes";
import NoteContext from "../context/notes/noteContext";

const Sidenav = () => {
  const [showPopUp, setShowPopUp] = useState({
    logout: false,
    addANote: false,
  });
  const navigate = useNavigate();
  const noteContext = useContext(NoteContext);
  const { notes, addNote } = noteContext;

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <>
      <div className="sidenav">
        <div className="header">
          <button
            className="button"
            onMouseOver={() => setShowPopUp({ logout: true })}
            onMouseOut={() => setShowPopUp({ logout: false })}
            onClick={handleLogout}
          >
            <i className="fa-solid fa-right-from-bracket"></i>
            {showPopUp.logout && <span className="popup">Logout</span>}
          </button>
          <div className={`center-container${notes.length === 0 ? "-2" : ""}`}>
            <p className="heading">
              {notes.length === 0 ? "No Notes Found" : "All Notes"}
            </p>
          </div>
          <div className="right-container">
            <button
              className="button"
              onMouseOver={() => setShowPopUp({ addANote: true })}
              onMouseOut={() => setShowPopUp({ addANote: false })}
              onClick={() =>
                addNote("New Note", "Enter Description Here", "Default")
              }
            >
              <i className="fa-solid fa-plus"></i>
              {showPopUp.addANote && <span className="popup">Add Note</span>}
            </button>
          </div>
        </div>
        <div className="notes">
          <Notes />
        </div>
      </div>
    </>
  );
};

export default Sidenav;
