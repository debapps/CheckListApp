import React from 'react'
import ToDoForm from './ToDoForm'
import ToDoListArea from './ToDoListArea'

export default function ToDoHome() {
  return (
    <div className='flex flex-row justify-between'>
        <div className='w-fit h-full flex justify-center'>
            <ToDoForm />
        </div>
        <ToDoListArea />
    </div>
  )
}
