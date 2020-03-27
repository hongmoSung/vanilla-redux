import { createElement } from "react";
import { createStore } from "redux";

const TO_ADD = "TO_ADD";
const TO_DELETE = "TO_DELETE";

const input = document.querySelector("input");
const form = document.querySelector("form");
const ul = document.querySelector("ul");

const reducer = (todo = [], action) => {
  switch (action.type) {
    case TO_ADD:
      todo.push(action.text);
      return todo;
    case TO_DELETE:
      return [];
    default:
      return todo;
  }
};

const store = createStore(reducer);

const createTodo = () => {
  console.log(store.getState());
  const li = document.createElement("li");
  li.innerHTML = store.getState()[store.getState().length - 1];
  ul.appendChild(li);
};

store.subscribe(createTodo);

const onSubmit = e => {
  e.preventDefault();
  const todo = input.value;
  store.dispatch({ type: TO_ADD, text: todo });
};

form.addEventListener("submit", onSubmit);
