import React from 'react';
import "../styles/EditButton.css";
// import EditModal from './EditModal';
import { Link } from 'react-router-dom';


const EditButton = (props) => {
  const { onEditClick } = props;

  return (
    <div>
        <Link to="/note/edit">
            <i className="fa-solid fa-pen-to-square" onClick={onEditClick}></i>
        </Link>
    </div>
  )
}

export default EditButton