import React from "react";
import "./Task.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

function Task({ task }) {
  var dispatch = useDispatch();

  return (
    <div className="task">
      <p className="description">{task.description}</p>
      <div id="btnedit">
    {/* show Edit form and send the id of the task to edit */}
        <button
          className="edit"
          id="change"
          onClick={() => {
            dispatch({ type: "showedit" });
            dispatch({ type: "idtask", payload: task.id });
          }}
        >
        {/* check box to update the status of a task:done in progress */}
          <FontAwesomeIcon icon={faPencilAlt} />
        </button>
        <input
          type="checkbox"
          id="status"
          onChange={() =>
            dispatch({ type: "updateCheckBox", payload: task.id })
          }
          checked={task.isDone ? true : false}
        />
      </div>
    </div>
  );
}

export default Task;
