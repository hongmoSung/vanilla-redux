import { createStore } from "redux";
import { createAction } from '@reduxjs/toolkit'

// const ADD = "ADD";
// const DELETE = "DELETE";
//
// const addTodo = text => {
//   return {
//     type: ADD,
//     text
//   };
// };
//
// const deleteTodo = id => {
//   return {
//     type: DELETE,
//     id
//   };
// };

const addTodo = createAction("ADD");
const deleteTodo = createAction("DELTE")


const reducer = (state = [], action) => {
  switch (action.type) {
    case addTodo.type:
      return [{ text: action.payload, id: Date.now() }, ...state];
    case deleteTodo.type:
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreator = {
  addTodo,
  deleteTodo
};

export default store;
