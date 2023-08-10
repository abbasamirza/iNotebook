import React, { useContext, useState } from "react";
import "../styles/css/Sidenav.css";
import { useNavigate } from "react-router-dom";
import Notes from "./Notes";
import NoteContext from "../context/notes/noteContext";

const Sidenav = () => {
  const [showPopUp, setShowPopUp] = useState({ logout: false, addnote: false });
  const navigate = useNavigate();
  const noteContext = useContext(NoteContext);
  const { addNote } = noteContext;

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
          <div className="center-container">
            <p className="heading">All Notes</p>
          </div>
          <div className="right-container">
            <button
              className="button"
              onMouseOver={() => setShowPopUp({ addnote: true })}
              onMouseOut={() => setShowPopUp({ addnote: false })}
              onClick={() => addNote("New Note", "Enter Description Here", "Default")}
            >
              <i className="fa-solid fa-plus"></i>
              {showPopUp.addnote && <span className="popup">Add Note</span>}
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
