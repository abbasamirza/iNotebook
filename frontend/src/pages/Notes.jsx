import NotesSidebar from "../components/NotesSidebar";
import FolderSidebar from "../components/FolderSidebar";
import React from "react";

const Notes = () => {
  return (
    <div className="flex h-screen">
      <FolderSidebar />
      <NotesSidebar />
    </div>
  );
};

export default Notes;
