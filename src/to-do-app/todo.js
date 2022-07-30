import Tasks from "./tasks";
import { useState,useEffect } from "react";
import ReactDOMServer from "react-dom/server";

const Todo = () => {
  const [task, setTask] = useState({
    newTask: "",
  });
  const [actions, setActions] = useState({
    isDone: true,
    isDeleted: false,
  });

  const markDone = () => {
    setActions({
      ...actions,
      isDone: true,
    });
    console.log(actions.isDone);
  };
  const markDeleted = () => {
    setActions({
      ...actions,
      isDeleted: true,
    });
    console.log(actions.isDeleted);
  };

  const handleInputTask = (ev) => {
    if (ev.target.name == "newTask") {
      setTask({
        ...task,
        newTask: ev.target.value,
      });
    }
  };
  const addNewTask = () => {
    if (task.newTask != "") {
      document.getElementById("taskList").innerHTML +=
        ReactDOMServer.renderToString(
          <Tasks
          value={task.newTask}
           funDone={markDone()}
           done={actions.isDone}
           funDeleted={markDeleted} 
          />
        );
      setTask({
        ...task,
        newTask: "",
      });
    }
  };
  return (
    <>
      <div className="container bg-primary w-50">
        <div className="m-3 text-center">
          <h2 className="form-label text-light">To-Do App!</h2>
          <input
            type="text"
            onChange={(evt) => handleInputTask(evt)}
            name="newTask"
            className="form-control mb-3"
            value={task.newTask}
            placeholder="Enter your task here..."
          />
          <button
            type="button"
            onClick={() => addNewTask()}
            className="btn btn-primary border-light"
          >
            Add Task
          </button>
          <p className="text-light text-center">Let's get some work done!</p>
        </div>
        <div id="taskList"></div>
      </div>
    </>
  );
};

export default Todo;
