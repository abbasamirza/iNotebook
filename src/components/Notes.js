import React, { useContext, useEffect } from "react";
import NoteContext from "../context/notes/noteContext";
import { useNavigate } from "react-router-dom";
import NoteItem from "./NoteItem";

const Notes = () => {
  const noteContext = useContext(NoteContext);
  const { notes, fetchAllNotes, activeNoteId, setActiveNoteId } =
    noteContext;
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      fetchAllNotes();
    } else {
      navigate("/");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {notes.map((note) => {
        return (
          <NoteItem
            key={note._id}
            note={note}
            onClick={() => setActiveNoteId(note._id)}
            active={note._id === activeNoteId}
          />
        );
      })}
    </div>
  );
};

export default Notes;
