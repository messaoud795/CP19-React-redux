import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {  Provider } from "react-redux";
import { createStore , combineReducers} from "redux";

//create the tasks state
function taskreducer(state={tasks:[]}, action) {
switch (action.type) {
  case "add": return {tasks:[...state.tasks,...action.payload ]};  
  case "edittask":  return {tasks : state.tasks.map(el => el.id === action.payload.id? {...el , description :action.payload.text} : el)} 
  case "updateCheckBox" : return {tasks : state.tasks.map(el => el.id === action.payload ? {...el , isDone : !el.isDone} : el)}
  default : return state;}
}
//create reducer for the show state
function showformreducer(state={show1:false , show2 : false,show3:false,taskEdited:''}, action) {
  switch (action.type) {
    case "hideform": return {...state ,show1:false};  
    case "showform": return {...state,show1:true}; 
    case "hidefilter":  return {...state ,show2:false};  
    case "showfilter": return {...state ,show2:true};  
    case "hideedit": return {...state ,show3:false};  
    case "showedit": return {...state ,show3:true};  
    case "idtask": return {...state,taskEdited:action.payload};    
    default : return state;}
    ;}

//reducer to have the filter asked for to display
function filterreducer(state={filter:0}, action) {
  switch (action.type) {
    case "done": return {filter:1};  
    case "inprogress": return {filter:2};  
    case "reset": return {filter:0};  
    default : return state;}} 

// combine reducers
const rootreducer=combineReducers({taskreducer,showformreducer,filterreducer});

//create the store
const store = createStore(rootreducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
