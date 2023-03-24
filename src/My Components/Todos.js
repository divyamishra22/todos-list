import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = ({todos}) => {              //todos to get todos at index =0.
  return (
    <div className='text-center'>
        <h3 className="text-center">LIST</h3>
        {todos.map((todo)=>{
          return  <TodoItem todoitem={todo}/> }) }       
    </div>
  )
}
