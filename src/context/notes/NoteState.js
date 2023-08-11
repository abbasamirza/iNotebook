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
      let allNotes = await fetch(`${host}notes/fetchallnotes`, {
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
      let noteToAdd = await fetch(`${host}notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("authToken"),
        },
        body: JSON.stringify({
          title: title,
          description: description,
          tag: tag,
        }),
      });
      noteToAdd = await noteToAdd.json();
      setNotes((notes) => [...notes, noteToAdd]);
    } catch (error) {
      console.error(error.message);
    }
  };

  // Update note
  const updateNote = async (noteid, title, description, tag) => {
    // API Call
    try {
      await fetch(`${host}notes/updatenote/${noteid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("authToken"),
        },
        body: JSON.stringify({
          title: title,
          description: description,
          tag: tag,
        }),
      });
    } catch (error) {
      console.error(error.message);
    }

    // Update note in FrontEnd
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];

      if (element._id === noteid) {
        notes[index].title = title;
        notes[index].description = description;
        notes[index].tag = tag;
        break;
      }
    }
    setNotes(notes);
  };

  // Delete note
  const deleteNote = async (noteid) => {
    // API Call
    try {
      await fetch(`${host}notes/deletenote/${noteid}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("authToken"),
        },
      });

      setNotes(
        notes.filter((note) => {
          return note._id !== noteid;
        })
      );
    } catch (error) {
      console.error(error.message);
    }
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
        setActiveNoteId
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
