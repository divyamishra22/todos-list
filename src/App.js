
import './App.css';
import Header from "./My Components/Header";        // since,Header is default export therefore, no brackets req.
//import { TodoItem } from './My Components/TodoItem';  
import { Todos } from './My Components/Todos';
import React, { useState } from 'react';
import { Addtodo } from './My Components/AddTodo';
//import {About} from './My Components/About';                //addTodo defined in Addtodo needs to implemted
import {useEffect } from 'react';
//import {
 // BrowserRouter as Router,
 //Switch,
 // Route
//} from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete =(todo) =>{
    console.log("on delete of todo", todo);
    settodos(todos.filter((e)=> {
      return e!== todo;
    }));
    console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addTodo = (title,desc) => {
    let sno;
    console.log("adding a todo");
    if (todos.length === 0) {
      sno = 0;}
      else{
     sno = todos[todos.length-1].sno +1; }
    const myTodo ={
      sno:sno,
      title:title,
      desc:desc,
    }
    settodos([...todos,myTodo]);
    console.log(myTodo);
  }
  const [todos, settodos] = useState([initTodo]);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <>
    
      <Header title="My Todos List" searchBar={false} /> 
      <Addtodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} /> 
    </>
  );
}


export default App;
