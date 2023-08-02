import React from "react";

const NoteItem = (props) => {
  const { note } = props;

  return (
    <>
      <div className="col-md-3 mx-2">
        <div className="card my-5">
          <div className="card-body">
            <h5 className="card-title p-1">{note.title}</h5>
            <p className="card-text p-1">{note.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteItem;
