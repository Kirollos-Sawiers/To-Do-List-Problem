import { useState } from "react";
import ReactDOMServer from "react-dom/server";

function Tasks(props) {
  const [actions, setActions] = useState({
      isDone: false,
      isDeleted: false,
  });

  const markDone = () => {
    console.log("hello")
      setActions({
          ...actions,
          isDone: true,
      })
    
  }
  const markDeleted = () => {
      setActions({
          ...actions,
          isDeleted: true,
      })
      console.log(actions.isDeleted)
  }
  const checkIsDoneValue = () => {
    if (actions.isDone == true) {
      document.getElementById("taskList").style.textDecorationLine = "line-through";
      document.getElementById("taskList").style.color = "red";
    }
    const input = document.getElementById("taskList")

    console.log("hello")
  }
  console.log(props.funDone)
  return (
    <>
      <div className="container mb-2">
        <p className={`${actions.isDone?'text-decoration-line-through':''}`} >{props.value}</p>
        {/* <input
          className="newTask mx-3"
          id="task"
          type="text"
          readOnly
          onMouseLeave ={() => checkIsDoneValue()}
          
        /> */}
        <button
          type="button"
          onClick={() => markDone() }
          className="btn btn-success btn-sm mx-3"
        >
          Done
        </button>
        <button
          type="button"
          onClick={() => markDeleted()}
          className="btn btn-danger btn-sm mx-3"
        >
          Delete
        </button>
      </div>
    </>
  );
}

export default Tasks;
// props.done ? { textDecorationLine: "line-through" } : {};