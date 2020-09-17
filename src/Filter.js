import React from "react";
import { useDispatch } from "react-redux";


function Filter() {
  var dispatch=useDispatch();
  //sent the filter chosen to the reducer
function handlesubmit(e) {
  e.preventDefault();
  if(document.getElementById('done').checked){ dispatch({type:"done"});}
  if(document.getElementById('inprogress').checked){ dispatch({type:"inprogress"});}
  dispatch({type:"hidefilter"});
}


  return ( 
  <div className="newtask">
    <h2>Filter </h2>  
  <form  onSubmit={handlesubmit}   >
    <label > Tasks done
    <input type="radio" id='done' name='actions' />
    </label><br/><br/>
    <label > Tasks in progress
    <input type="radio" id='inprogress' name='actions' />
    </label>
    <div>
    <input type="submit" value="Filter" className='sent'/>
    {/* reset form by click on the reset button and hide fomr */}
    <button className="exit" onClick={()=>{dispatch({type:"reset"});dispatch({type:"hidefilter"}); }}>Reset</button>
    </div>
  </form>

  </div>);
 
}

export default Filter;