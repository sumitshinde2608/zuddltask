import React from "react";
import TaskCard from "./components/TaskCard/TaskCard";
import "./TasksBoard.css";
const TasksBoard = () => {
  return (
    <div className="tasks">
      <div className="stages Resources">
        <h3>RESOURCES</h3>
        <div className="tasks-list">
          <TaskCard />
          <TaskCard />
        </div>
        {/* <div className="card-input"> */}
        <input className="input" type="text" placeholder="Add a card" />
        {/* </div> */}
      </div>

      <div className="stages To-Do">
        <h3>TO-DO</h3>
        <div className="tasks-list"></div>
        <input className="input" type="text" placeholder="Add a card" />
      </div>

      <div className="stages In-Progress">
        <h3>In Progress</h3>
        <div className="tasks-list"></div>
        <input className="input" type="text" placeholder="Add a card" />
      </div>

      <div className="stages Done">
        <h3> Done </h3>
        <div className="tasks-list"></div>
        <input className="input" type="text" placeholder="Add a card" />
      </div>
    </div>
  );
};

export default TasksBoard;
