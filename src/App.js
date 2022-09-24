import React from "react";
import TasksBoard from "./pages/TasksBoard/TasksBoard";
import { DndProvider } from "react-dnd";

import { HTML5Backend } from "react-dnd-html5-backend";

const App = () => {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <TasksBoard />
      </DndProvider>
    </div>
  );
};

export default App;
