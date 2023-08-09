import React from "react";
import "../styles/css/NoteItem.css";

const NoteItem = (props) => {
  const { note, active, onClick } = props;

  return (
    <div className={`noteitem ${active ? "noteitem-active" : "noteitem-inactive"}`} onClick={onClick}>
      <h4>{note.title}</h4>
      <p>{note.description}</p>
    </div>
  );
};

export default NoteItem;
