import React, { useContext, useEffect, useState } from "react";
import "../styles/css/NoteBody.css";
import NoteContext from "../context/notes/noteContext";

const NoteBody = () => {
  const noteContext = useContext(NoteContext);
  const { notes, activeNoteId, updateNote } = noteContext;
  const [currentNote, setCurrentNote] = useState([]);
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  useEffect(() => {
    setCurrentNote(
      notes.filter((note) => {
        return note._id === activeNoteId;
      })
    );
    // eslint-disable-next-line
  }, [activeNoteId, notes]);

  const handleTitleChange = (event) => {
    if (
      currentNote[0].title.length < 80 ||
      event.nativeEvent.inputType === "deleteContentBackward"
    ) {
      setCurrentNote((prevCurrentNote) => {
        const updatedNote = {
          ...prevCurrentNote[0],
          title: event.target.value,
        };
        return [updatedNote, ...prevCurrentNote.slice(1)];
      });
    }
  };

  const handleDescriptionChange = (event) => {
    setCurrentNote((prevCurrentNote) => {
      const updatedNote = {
        ...prevCurrentNote[0],
        description: event.target.value,
      };
      return [updatedNote, ...prevCurrentNote.slice(1)];
    });
  };

  const updateBackend = () => {
    updateNote(
      currentNote[0]._id,
      currentNote[0].title,
      currentNote[0].description,
      currentNote[0].tag
    );
  };

  useEffect(() => {
    if (debounceTimeout !== null) {
      clearTimeout(debounceTimeout);
    }

    if (currentNote.length !== 0) {
      setDebounceTimeout(setTimeout(updateBackend, 2000));
    }
    // eslint-disable-next-line
  }, [currentNote]);

  return (
    <div className="container-note">
      {currentNote.length !== 0 && (
        <input
          className="container-notetitle"
          value={currentNote[0].title}
          onChange={handleTitleChange}
        />
      )}
      {currentNote.length !== 0 && (
        <textarea
          className="container-notebody"
          value={currentNote[0].description}
          onChange={handleDescriptionChange}
        />
      )}
    </div>
  );
};

export default NoteBody;
