import { createStore } from "redux";

const TO_ADD = "TO_ADD";
const TO_DELETE = "TO_DELETE";

const input = document.querySelector("input");
const form = document.querySelector("form");
const ul = document.querySelector("ul");

const addTodo = text => {
  return {
    type: TO_ADD,
    text
  };
};

const deleteTodo = id => {
  return {
    type: TO_DELETE,
    id
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case TO_ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case TO_DELETE:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

const dispatchAddTodo = text => {
  store.dispatch(addTodo(text));
};

const onSubmit = e => {
  e.preventDefault();
  const todo = input.value;
  dispatchAddTodo(todo);
};

const dispatchDeleteToDo = e => {
  const id = e.target.parentNode.id;
  store.dispatch(deleteTodo(parseInt(id)));
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach(todo => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.addEventListener("click", dispatchDeleteToDo);
    btn.innerText = "DEL";
    li.id = todo.id;
    li.innerText = todo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDos);

form.addEventListener("submit", onSubmit);
