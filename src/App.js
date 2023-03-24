
import './App.css';
import Header from "./My Components/Header";        // since,Header is default export therefore, no brackets req.
//import { TodoItem } from './My Components/TodoItem';  
import { Todos } from './My Components/Todos';
import React, { useState } from 'react';
import { Addtodo } from './My Components/AddTodo';                 //addTodo defined in Addtodo needs to implemted


function App() {
  const onDelete =(todo) =>{
    console.log("on delete of todo", todo);
    settodos(todos.filter((e)=> {
      return e!== todo;
    }))
  }
  const addTodo = (title,desc) =>{
    console.log("adding a todo");
    let sno = todos[todos.length-1].sno +1;
    const myTodo ={
      sno:sno,
      title:title,
      desc:desc,
    }
    console.log(myTodo);
  }
  const [todos, settodos] = useState([
  {
    sno:1,
    title:"Market",
    desc:"Go to Market"
  },
  {
    sno:2,
    title:"Shopping",
    desc:"Go to Shopping"
  },
  {
    sno:3,
    title:"Temple",
    desc:"Go to Temple"
  }
 ]);
  return (
    <>
    <Header title={"TODOS"} />
   <Addtodo addtodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    </>
  );
}


export default App;
