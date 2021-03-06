import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index";

const initialState = {
    todoList: []
} 

const store = createStore(reducers, initialState, applyMiddleware(thunk));

export default store;