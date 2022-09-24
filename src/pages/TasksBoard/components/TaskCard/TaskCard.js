import React from "react";
import "./TaskCard.css";

const TaskCard = ({ title, description }) => {
  return (
    <div className="card">
      <h4>{description}</h4>
    </div>
  );
};

export default TaskCard;
