import React, { useEffect, useState } from "react";
import Task from "./Task";
import { useSelector } from "react-redux";

function ListTask() {
  var { tasks } = useSelector((state) => ({ ...state.taskreducer }));
  var { filter } = useSelector((state) => ({ ...state.filterreducer }));
//use a display state to display tasks filtred
  var [displayTasks, setTasks] = useState(tasks);
  useEffect(() => {
    //no filter applied
    if(filter === 0 ){
      setTasks(tasks);
    }
    //action done filtred
    else if (filter === 1) {
      setTasks(tasks.filter((task) => task.isDone));
    //action in progress filtred
    } else if (filter === 2) {
      setTasks(tasks.filter((task) => !task.isDone));
    }
  }, 
  //update useeffect method in case of a change in the filter or task states
  [filter, tasks]);

  return (
    <div>
      {displayTasks
        .map((task) => (
          <div key={task.id}>
            <Task task={task}> </Task>
          </div>
        ))}
    </div>
  );
}

export default ListTask;
