import { useState, useContext } from "react";
import NoteContext from "./noteContext";
import ApiContext from "../apiKey/apiContext";

const NoteState = (props) => {
  const [notes, setNotes] = useState([]);
  const [activeNoteId, setActiveNoteId] = useState(null);
  const host = useContext(ApiContext);

  // Fetch all notes
  const fetchAllNotes = async () => {
    // API Call
    try {
      let allNotes = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "auth-token": localStorage.getItem("authToken"),
        },
      });
      allNotes = await allNotes.json();
      setNotes(allNotes);
    } catch (error) {
      console.error(error.message);
    }
  };

  // Add a note
  const addNote = async (title, description, tag) => {
    // API Call
    try {
      let noteToAdd = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("authToken"),
        },
        body: JSON.stringify({
          title,
          description,
          tag,
        }),
      });
      noteToAdd = await noteToAdd.json();
      setNotes((notes) => [...notes, noteToAdd]);
    } catch (error) {
      console.error(error.message);
    }
  };

  // Update note
  const updateNote = async (noteId, title, description, tag) => {
    // API Call
    try {
      await fetch(`${host}/api/notes/updatenote/${noteId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("authToken"),
        },
        body: JSON.stringify({
          title,
          description,
          tag,
        }),
      });
    } catch (error) {
      console.error(error.message);
    }

    // Update note in FrontEnd
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];

      if (element._id === noteId) {
        notes[index].title = title;
        notes[index].description = description;
        notes[index].tag = tag;
        break;
      }
    }
    setNotes(notes);
  };

  // Delete note
  const deleteNote = async (noteId) => {
    // API Call
    try {
      await fetch(`${host}/api/notes/deletenote/${noteId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("authToken"),
        },
      });

      setNotes(
        notes.filter((note) => {
          return note._id !== noteId;
        })
      );
    } catch (error) {
      console.error(error.message);
    }
  };

  // Callback function to notify Sidenav when a note is updated
  const notifyNoteUpdate = () => {
    fetchAllNotes();
  };

  return (
    <NoteContext.Provider
      value={{
        notes,
        setNotes,
        fetchAllNotes,
        addNote,
        updateNote,
        deleteNote,
        activeNoteId,
        setActiveNoteId,
        notifyNoteUpdate,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
