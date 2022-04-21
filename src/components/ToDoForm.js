import React, { useRef } from 'react'
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import actionCreators from "../state/index";

export default function ToDoForm () {

  // Get the dispatch methods and bind action creators.
  const dispatch = useDispatch();
  const { addTODOItem } = bindActionCreators(actionCreators, dispatch);

  // useRef hooks.
  const todoItem = useRef(null);

  function addTodo (event) {
    event.preventDefault();
    let todoText = todoItem.current.value;
    addTODOItem(todoText);
    todoItem.current.value = "";
  }

  return (
    <div className="m-10 p-5 rounded-xl bg-slate-100 shadow-lg">
        <form onSubmit={addTodo} 
          className='flex flex-col justify-start items-start space-y-5'>
            <input className='p-2 border w-80 rounded-md hover:border-blue-300'
                type="text" ref={todoItem} placeholder='Enter TODO Item ..' />
            <button type='submit' 
              className="border hover:border-black p-2 rounded-lg shadow-lg bg-purple-500 hover:bg-purple-400 text-sm font-bold text-black">
              Add TODO
            </button>
        </form>
    </div>
  );
}
