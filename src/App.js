import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import AddTask from "./AddTask";
import ListTask from "./ListTask";
import Filter from "./Filter";
import { useSelector ,useDispatch} from "react-redux";
import Edit from './Edit';



function App() {
  var {show1,show2,show3}=useSelector(state=>({...state.showformreducer}));
  var dispatch=useDispatch();
//show and hide the new task form
  function openAddForm() {
    dispatch({type:"showform"}) ;
  }
//show and hide the filter form
  function openFilterForm() {
    dispatch({type:"showfilter"}) ;
  }
 

  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        {/* button to open the form to add a task */}
        <button className="add" onClick={openAddForm}>
          <FontAwesomeIcon icon={faCalendarPlus} />
        </button>
   {/* button to open the form for the filter */}
        <button className="filter">
          <FontAwesomeIcon icon={faSlidersH} onClick={openFilterForm}/>
        </button>
      </div>
      {show1 &&<AddTask/>}
      {show2 &&<Filter/>}
      {show3 && <Edit /> }
      <h1> Todo List :</h1>
        <ListTask />
    </div>

  );
}

export default App;
