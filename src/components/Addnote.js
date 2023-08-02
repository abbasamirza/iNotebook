import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/noteContext";
import HorizontalRule from "./HorizontalRule";

const Addnote = () => {
  const noteContext = useContext(NoteContext);
  const { addNote } = noteContext;
  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleOnChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNote(note.title, note.description, note.tag);
  };

  return (
    <>
      <h1 className="text-center">Add a Note</h1>
      <HorizontalRule />
      <form>
        <div className="my-4">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Enter title here"
            value={note.title}
            onChange={handleOnChange}
          />
        </div>
        <div className="my-4">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="20"
            className="form-control"
            value={note.description}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div className="my-4">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            placeholder="Enter tag here"
            value={note.tag}
            onChange={handleOnChange}
          />
        </div>
        <div className="d-grid gap-2">
          <button
            type="submit"
            className="btn btn-dark my-2"
            onClick={handleSubmit}
          >
            Add Note
          </button>
        </div>
      </form>
    </>
  );
};

export default Addnote;
