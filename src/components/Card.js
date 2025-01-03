import React from "react";
import "../styles/css/Card.css";

const Card = ({ children, className = "", style }) => {
  return (
    <div className={`card-container ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Card;
