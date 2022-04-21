import React from "react";
import { useSelector } from "react-redux";
import ToDoItem from "./ToDoItem";


export default function ToDoListArea() {

  // Get the Todolist from redux state.
  const todoList = useSelector(state => state.todoList);
    
  return (
    <>
      <div className="bg-purple-100 w-3/4 h-full m-10 flex flex-wrap flex-row justify-start">
        
        {todoList.map((todoItem, idx) => {
          return <ToDoItem key={idx} todoText={todoItem} />
        })}

      </div>
    </>
  );
}
