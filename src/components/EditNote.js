import React, { useContext } from 'react'
import NoteContext from '../context/notes/noteContext'

const EditNote = () => {
    const context = useContext(NoteContext);
    const { notes } = context;

  return (
    <div>
        Edit Note
    </div>
  )
}

export default EditNote