import { React, useContext } from "react";
import NoteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";

const Notes = () => {
  const notesInitial = useContext(NoteContext);
  const { notes } = notesInitial;

  return (
    <div className="row my-3">
      <h1 className="text-center my-3">Your Notes</h1>
      {notes.map((note) => {
        return <NoteItem key={note._id} note={note} />;
      })}
    </div>
  );
};

export default Notes;
