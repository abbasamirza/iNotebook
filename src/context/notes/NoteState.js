import { useState, useContext } from "react";
import NoteContext from "./noteContext";
import ApiContext from "../apiKey/apiContext";

const NoteState = (props) => {
  const [notes, setNotes] = useState([]);
  const host = useContext(ApiContext);

  // Fetch all notes
  const fetchAllNotes = async () => {
    // API Call
    try {
      let allNotes = await fetch(`${host}notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjNzVmMWMzYzg2OGU4Y2Y2Mzk3NzE5In0sImlhdCI6MTY5MDc4NzYxMn0.hDicBIX2pqHU2FTBRM5PJ8WIE8qH8xBp4A10dkf8hKY"
        },
      });
      allNotes = await allNotes.json();
      setNotes(allNotes);
    } catch (error) {
      console.error(error.message);
    }
  }

  // Add a note
  const addNote = async (title, description, tag) => {
    // API Call
    console.log("Adding note");
    try {
      let noteToAdd = await fetch(`${host}notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjNzVmMWMzYzg2OGU4Y2Y2Mzk3NzE5In0sImlhdCI6MTY5MDc4NzYxMn0.hDicBIX2pqHU2FTBRM5PJ8WIE8qH8xBp4A10dkf8hKY"
        },
        body: JSON.stringify({
          "title": title,
          "description": description,
          "tag": tag
        }),
      });
      noteToAdd = await noteToAdd.json();
      setNotes((notes) => [...notes, noteToAdd]);
    } catch (error) {
      console.error(error.message); 
    }
  }

  return (
    <NoteContext.Provider value={{ notes, setNotes, fetchAllNotes, addNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
