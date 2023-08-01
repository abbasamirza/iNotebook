import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "64c89ec665675c4ca318c9cd",
      user: "64c75f1c3c868e8cf6397719",
      title: "My Name",
      description: "Hello, my name is Abbas",
      tag: "Personal",
      __v: 0,
    },
    {
      _id: "64c89ec965675c4ca318c9cf",
      user: "64c75f1c3c868e8cf6397719",
      title: "My Name Updated",
      description: "Hello, my name is Abbas Ali Mirza",
      tag: "Personal",
      __v: 0,
    },
    {
      _id: "64c89ec665675c4ca318c9cd",
      user: "64c75f1c3c868e8cf6397719",
      title: "My Name",
      description: "Hello, my name is Abbas",
      tag: "Personal",
      __v: 0,
    },
    {
      _id: "64c89ec965675c4ca318c9cf",
      user: "64c75f1c3c868e8cf6397719",
      title: "My Name Updated",
      description: "Hello, my name is Abbas Ali Mirza",
      tag: "Personal",
      __v: 0,
    },
    {
      _id: "64c89ec665675c4ca318c9cd",
      user: "64c75f1c3c868e8cf6397719",
      title: "My Name",
      description: "Hello, my name is Abbas",
      tag: "Personal",
      __v: 0,
    },
    {
      _id: "64c89ec965675c4ca318c9cf",
      user: "64c75f1c3c868e8cf6397719",
      title: "My Name Updated",
      description: "Hello, my name is Abbas Ali Mirza",
      tag: "Personal",
      __v: 0,
    },
    {
      _id: "64c89ec665675c4ca318c9cd",
      user: "64c75f1c3c868e8cf6397719",
      title: "My Name",
      description: "Hello, my name is Abbas",
      tag: "Personal",
      __v: 0,
    },
    {
      _id: "64c89ec965675c4ca318c9cf",
      user: "64c75f1c3c868e8cf6397719",
      title: "My Name Updated",
      description: "Hello, my name is Abbas Ali Mirza",
      tag: "Personal",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
