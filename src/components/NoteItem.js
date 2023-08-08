import React from "react";
import EditButton from "./EditButton";
import "../styles/NoteItem.css";
import DeleteButton from "./DeleteButton";

const NoteItem = (props) => {
  const { note, onEditClick } = props;

  return (
    <>
      <div className="col-md-3">
        <div className="card my-5">
          <div className="card-body text-center">
            <h5 className="card-title p-1">{note.title}</h5>
            <p className="card-text p-1">{note.description}</p>
            <div className="d-flex justify-content-center">
              <div className="mx-2">
                <EditButton onEditClick={onEditClick} />
              </div>
              <div className="mx-2">
                <DeleteButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteItem;
