import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = ({todos}) => {              //todos to get todos at index =0.
  return (
    <div className='text-center'>
        <h3 className="text-center">LIST</h3>
        <TodoItem todoitem={todos[0]}/>           
    </div>
  )
}
