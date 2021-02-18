import {configureStore, createAction, createReducer} from '@reduxjs/toolkit';

const addTodo = createAction("ADD");
const deleteTodo = createAction("DELETE")

const reducer = createReducer([], {
  [addTodo]: (state, action) => {
    state.push({text: action.payload, id: Date.now()});
  },
  [deleteTodo]: (state, action) => {
    return state.filter(todo => todo.id !== action.payload);
  }
});

const store = configureStore({reducer});

export const actionCreator = {
  addTodo,
  deleteTodo
};

export default store;
