import React from 'react';
import './AddTask.css'
import {useDispatch}from 'react-redux';
import { v4 as uuidv4 } from "uuid";


function AddTask() {
  var dispatch=useDispatch();
  //get the new task description
  function handlesubmit(event) {
    event.preventDefault();
    var form = document.getElementById("form");
   if (form.description.value.length>4){
    var newtask=[{
      id: uuidv4(),
      description: form.description.value,
      isDone: false }]
    dispatch({type:"add", payload:newtask});
    form.reset();
   dispatch({type:"hideform"}) ;
   }   
}

  return (
    <div className="newtask" >
    <h2>Add a new task</h2>
    <form  onSubmit={handlesubmit}  id="form">
      <input type="text" name='description' placeholder="Enter the description of the new Task"  className='descriptionform'/><br/>
      <div style={{display:'flex', justifyContent:'center'}}>
      <input type="submit" value='Sent' className='sent'/>
      <button className='exit' onClick={()=> dispatch({type:"hideform"})}>  Exit </button> 
      </div>
    </form>
    </div>
  );
}

export default AddTask;