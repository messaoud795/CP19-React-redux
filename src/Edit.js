import React from 'react';
import { useSelector ,useDispatch} from "react-redux";

function Edit() {
  var {taskEdited}=useSelector(state=>({...state.showformreducer}));
    var dispatch=useDispatch();
    //get the text from the input and sent it with the id of the task to the reducer
    function handleedit(e) {
      e.preventDefault();
      var newText=document.getElementById("form3").description.value;
      var data={id:taskEdited,text:newText};
      dispatch({type:"edittask", payload:data});
      dispatch({type:"hideedit"})};
    

    return (
        <div className="newtask" >
        <h2>Edit </h2>
        <form  onSubmit={handleedit}  id="form3">
          <input type="text" name='description' placeholder="Enter the new description "  className='descriptionform'/><br/>
          <div style={{display:'flex', justifyContent:'center'}}>
          <input type="submit" value='Sent' className='sent'/>
          <button className='exit' onClick={()=>dispatch({type:"hideedit"})}>  Exit </button> 
          </div>
        </form>
        </div>
      );}


export default Edit;