import { React, useContext, useEffect } from "react";
import NoteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import "../styles/Notes.css";
import HorizontalRule from "./HorizontalRule";

const Notes = () => {
  const noteContext = useContext(NoteContext);
  const { notes, fetchAllNotes } = noteContext;

  useEffect(() => {
    fetchAllNotes();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="row my-3 justify-content-center">
      <h1 className="text-center">Your Notes</h1>
      <HorizontalRule />
      {notes.map((note) => {
        return <NoteItem key={note._id} note={note} />;
      })}
    </div>
  );
};

export default Notes;
