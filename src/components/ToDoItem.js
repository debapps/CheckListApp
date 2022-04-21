import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import actionCreators from "../state/index";


export default function ToDoItem(props) {

    // Get the dispatch methods and bind action creators.
    const dispatch = useDispatch();
    const { deleteTODOItem } = bindActionCreators(actionCreators, dispatch);

    // ToDo Status.
    const [isDone, setIsDone] = useState(false);

    function toggleToDo () {
        setIsDone(!isDone);
    }

    function deleteTodo () {
        setIsDone(false);
        deleteTODOItem(props.todoText); 
    }
        
    // Change the background color based on todo completed status.
    const todoColor = isDone ? "bg-green-100" : "bg-yellow-100";
    const doneColor = isDone ? "bg-black" : ""

    return (
      <div className={`${todoColor} w-1/4 m-5 p-3 flex justify-center items-center space-x-2`}>
          <div onClick={toggleToDo} className={`${doneColor} text-green-500 hover:text-white hover:bg-green-500 active:bg-slate-400`}>
              <span className="material-icons-outlined">done</span>
          </div>
          <div className=" hover:font-bold text-sm">
              {props.todoText}
          </div>
          <div onClick={deleteTodo} className="text-red-500 hover:bg-red-500 hover:text-white active:bg-slate-400">
              <span className="material-icons-outlined">delete</span>
          </div>
      </div>
    )
}
