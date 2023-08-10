import React, { useContext, useState } from "react";
import "../styles/css/NoteItem.css";
import NoteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const { note, active, onClick } = props;
  const [showDelete, setShowDelete] = useState(false);
  const noteContext = useContext(NoteContext);
  const { deleteNote } = noteContext;

  return (
    <div
      className={`noteitem ${active ? "noteitem-active" : "noteitem-inactive"}`}
      onClick={onClick}
      onMouseOver={() => setShowDelete(true)}
      onMouseOut={() => setShowDelete(false)}
    >
      <div className="title">
        <h4>{note.title}</h4>
      </div>
      <div className="description">
        <p>{note.description}</p>
      </div>
      <button className="btn-trash">
        {showDelete && <i className="fa-solid fa-trash" onClick={() => {deleteNote(note._id)}}></i>}
      </button>
    </div>
  );
};

export default NoteItem;
