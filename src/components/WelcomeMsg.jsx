import React from 'react'
import { useContext } from 'react'
import { TodoItemsContext } from './store/todo-items-store'

const WelcomeMsg = () => {
  const  contextObj=useContext(TodoItemsContext)
  const todoItems=contextObj.todoItems
  return (
   todoItems.length===0 && <p className='text-center'>Add Your Todo</p>
  )
}

export default WelcomeMsg
