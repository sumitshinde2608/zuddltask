import React, { useState } from "react";
import TaskCard from "./components/TaskCard/TaskCard";
import "./TasksBoard.css";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// const tasks = [
//   {
//     id: 1,
//     description: "Description 1",
//     status: "resources",
//     dragId: "1",
//   },
//   {
//     id: 2,
//     description: "Description 2",
//     status: "todo",
//     dragId: "2",
//   },
//   {
//     id: 3,
//     description: "Description 3",
//     status: "inprogress",
//     dragId: "3",
//   },
//   {
//     id: 4,
//     description: "Description 4",
//     status: "done",
//     dragId: "4",
//   },
//   {
//     id: 5,
//     description: "Description 5",
//     status: "done",
//     dragId: "5",
//   },
// ];

const TasksBoard = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: "Description 1",
      status: "resources",
      dragId: "1",
    },
    {
      id: 2,
      description: "Description 2",
      status: "todo",
      dragId: "2",
    },
    {
      id: 3,
      description: "Description 3",
      status: "inprogress",
      dragId: "3",
    },
    {
      id: 4,
      description: "Description 4",
      status: "done",
      dragId: "4",
    },
    {
      id: 5,
      description: "Description 5",
      status: "done",
      dragId: "5",
    },
  ]);

  const [resources, setResources] = useState(
    tasks.filter((task) => task.status === "resources")
  );
  const [todo, setTodo] = useState(
    tasks.filter((task) => task.status === "todo")
  );
  const [inprogress, setInProgress] = useState(
    tasks.filter((task) => task.status === "inprogress")
  );
  const [done, setDone] = useState(
    tasks.filter((task) => task.status === "done")
  );
  const [enabled, setEnabled] = React.useState(false);

  // React.useEffect(() => {
  //   const animation = requestAnimationFrame(() => setEnabled(true));

  //   return () => {
  //     cancelAnimationFrame(animation);
  //     setEnabled(false);
  //   };
  // }, []);

  // if (!enabled) {
  //   return null;
  // }

  const AddNewCard = (e, status) => {
    e.preventDefault();
    console.log("Add new task");
    console.log(todo);
    if (status === "resources") {
      setResources((tasks) => {
        console.log("in resources", tasks);
        return [
          ...tasks,
          {
            id: tasks.length + 1,
            description: e.target.value,
            status: status,
            dragId: toString(tasks.length + 1),
          },
        ];
      });
    } else if (status === "todo") {
      setTodo((tasks) => {
        return [
          ...tasks,
          {
            id: tasks.length + 1,
            description: e.target.value,
            status: status,
            dragId: toString(tasks.length + 1),
          },
        ];
      });
    } else if (status === "inprogress") {
      setInProgress((tasks) => {
        return [
          ...tasks,
          {
            id: tasks.length + 1,
            description: e.target.value,
            status: status,
            dragId: toString(tasks.length + 1),
          },
        ];
      });
    } else if (status === "done") {
      setDone((tasks) => {
        return [
          ...tasks,
          {
            id: tasks.length + 1,
            description: e.target.value,
            status: status,
            dragId: toString(tasks.length + 1),
          },
        ];
      });
    }
    console.log(tasks);
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;
    console.log("result", result);

    if (source.droppableId !== destination.droppableId) {
      const sourceItems = Array.from(
        source.droppableId === "resources"
          ? resources
          : source.droppableId === "todo"
          ? todo
          : source.droppableId === "inprogress"
          ? inprogress
          : done
      );
      const destItems = Array.from(
        destination.droppableId === "resources"
          ? resources
          : destination.droppableId === "todo"
          ? todo
          : destination.droppableId === "inprogress"
          ? inprogress
          : done
      );
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      console.log("sourceItems", sourceItems);
      console.log("destItems", destItems);
      if (source.droppableId === "resources") {
        setResources(sourceItems);
        if (destination.droppableId === "todo") {
          setTodo(destItems);
        } else if (destination.droppableId === "inprogress") {
          setInProgress(destItems);
        } else if (destination.droppableId === "done") {
          setDone(destItems);
        }
      } else if (source.droppableId === "todo") {
        setTodo(sourceItems);
        if (destination.droppableId === "resources") {
          setResources(destItems);
        } else if (destination.droppableId === "inprogress") {
          setInProgress(destItems);
        } else if (destination.droppableId === "done") {
          setDone(destItems);
        }
      } else if (source.droppableId === "inprogress") {
        setInProgress(sourceItems);
        if (destination.droppableId === "done") {
          setDone(destItems);
        } else if (destination.droppableId === "resources") {
          setResources(destItems);
        } else if (destination.droppableId === "todo") {
          setTodo(destItems);
        }
        console.log("inprogress", inprogress);
        console.log("sourceItems", sourceItems);
      } else if (source.droppableId === "done") {
        setDone(sourceItems);
        if (destination.droppableId === "resources") {
          setResources(destItems);
        }
        if (destination.droppableId === "todo") {
          setTodo(destItems);
        }
        if (destination.droppableId === "inprogress") {
          setInProgress(destItems);
        }
      }
    } else {
      const items = Array.from(
        source.droppableId === "resources"
          ? resources
          : source.droppableId === "todo"
          ? todo
          : source.droppableId === "inprogress"
          ? inprogress
          : done
      );
      const [reorderedItem] = items.splice(source.index, 1);
      items.splice(destination.index, 0, reorderedItem);
      if (source.droppableId === "resources") {
        setResources(items);
      } else if (source.droppableId === "todo") {
        setTodo(items);
      } else if (source.droppableId === "inprogress") {
        setInProgress(items);
      } else if (source.droppableId === "done") {
        setDone(items);
      }
    }
  };

  return (
    <div className="tasks">
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, tasks, setTasks)}
      >
        <div className="stages Resources">
          <h3>RESOURCES</h3>
          <Droppable droppableId="resources" type="PERSON">
            {(provided, snapshot) => (
              <>
                <div
                  className="tasks-list"
                  ref={provided.innerRef}
                  style={{
                    backgroundColor: snapshot.isDraggingOver ? "blue" : "pink",
                  }}
                  {...provided.droppableProps}
                >
                  {resources.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.description}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          className="task"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <TaskCard
                            title={task.title}
                            description={task.description}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
                <input
                  className="input"
                  type="text"
                  placeholder="Add a card"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      AddNewCard(e, "resources");
                      console.log("key pressed");
                    }
                  }}
                />
                {provided.placeholder}
              </>
            )}
          </Droppable>
        </div>

        <div className="stages To-Do">
          <h3>TO-DO</h3>
          <Droppable droppableId="todo" type="PERSON">
            {(provided, snapshot) => (
              <>
                <div
                  className="tasks-list"
                  ref={provided.innerRef}
                  style={{
                    backgroundColor: snapshot.isDraggingOver ? "blue" : "pink",
                  }}
                  {...provided.droppableProps}
                >
                  {todo.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.description}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          className="task"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <TaskCard
                            title={task.title}
                            description={task.description}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
                <input
                  className="input"
                  type="text"
                  placeholder="Add a card"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      AddNewCard(e, "todo");
                      console.log("key pressed");
                    }
                  }}
                />
                {provided.placeholder}
              </>
            )}
          </Droppable>
        </div>

        <div className="stages In-Progress">
          <h3>In Progress</h3>
          <Droppable droppableId="inprogress" type="PERSON">
            {(provided, snapshot) => (
              <>
                <div
                  className="tasks-list"
                  ref={provided.innerRef}
                  style={{
                    backgroundColor: snapshot.isDraggingOver ? "blue" : "pink",
                  }}
                  {...provided.droppableProps}
                >
                  {inprogress.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.description}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          className="task"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <TaskCard
                            title={task.title}
                            description={task.description}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
                <input
                  className="input"
                  type="text"
                  placeholder="Add a card"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      AddNewCard(e, "inprogress");
                      console.log("key pressed");
                    }
                  }}
                />
                {provided.placeholder}
              </>
            )}
          </Droppable>
        </div>

        <div className="stages Done">
          <h3> Done </h3>

          <Droppable droppableId="done" type="PERSON">
            {(provided, snapshot) => (
              <>
                <div
                  className="tasks-list"
                  ref={provided.innerRef}
                  style={{
                    backgroundColor: snapshot.isDraggingOver ? "blue" : "pink",
                  }}
                  {...provided.droppableProps}
                >
                  {done.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.description}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          className="task"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <TaskCard
                            title={task.title}
                            description={task.description}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
                <input
                  className="input"
                  type="text"
                  placeholder="Add a card"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      AddNewCard(e, "done");
                      console.log("key pressed");
                    }
                  }}
                />
                {provided.placeholder}
              </>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
};

export default TasksBoard;
