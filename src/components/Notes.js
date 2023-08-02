import { React, useContext, useEffect } from "react";
import NoteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import "../styles/Notes.css";

const Notes = () => {
  const noteContext = useContext(NoteContext);
  const { notes, fetchAllNotes } = noteContext;

  useEffect(() => {
    fetchAllNotes();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="row my-3">
      <h1 className="text-center">Your Notes</h1>
      <div className="pb-4 mb-1 border-bottom border-custom border-black"></div>
      {notes.map((note) => {
        return <NoteItem note={note} />;
      })}
    </div>
  );
};

export default Notes;
