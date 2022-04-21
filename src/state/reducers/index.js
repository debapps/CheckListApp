import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";

const reducers = combineReducers({
    todoList: todoReducer
});

export default reducers;