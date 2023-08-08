import { React, useContext, useEffect } from "react";
import NoteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import "../styles/Notes.css";
import HorizontalRule from "./HorizontalRule";

const Notes = () => {
  const noteContext = useContext(NoteContext);
  const { notes, fetchAllNotes } = noteContext;
  const handleNoteEdit = (note) => {
    console.log("Edit note");
  }

  useEffect(() => {
    fetchAllNotes();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="row my-3 justify-content-center">
      <h1 className="text-center">Your Notes</h1>
      <HorizontalRule />
      {notes.map((note) => {
        return <NoteItem key={note._id} note={note} onEditClick={() => handleNoteEdit(note)} />;
      })}
    </div>
  );
};

export default Notes;
