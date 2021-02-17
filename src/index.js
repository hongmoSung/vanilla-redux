import {createStore} from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const onSubmit = (e) => {
    e.preventDefault();
    const todo = input.value;
    addToDo(todo);
    input.value = '';
}

form.addEventListener("submit", onSubmit);

const ADD_TODO = 'add';
const DEL_TODO = 'del';

const reducer = (state = [], action) => {

    switch (action.type) {
        case ADD_TODO:
            return [...state, {text: action.text, id: Date.now()}];
        case DEL_TODO:
            return state.filter(value => value.id !== action.id);
        default:
            return state;
    }

}

const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));

const delAction = id => ({type: DEL_TODO, id});
const delTodo = (id) => store.dispatch(delAction(id));

const addAction = text => ({type: ADD_TODO, text});
const addToDo = text => store.dispatch(addAction(text));

const paintTodos = () => {

    const toDos = store.getState();
    ul.innerHTML = '';
    toDos.forEach(todo => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        const {id, text} = todo;
        btn.innerText = "del";
        btn.addEventListener("click", () => delTodo(id));
        li.id = id;
        li.innerText = text;
        li.appendChild(btn);
        ul.appendChild(li);
    });
}

store.subscribe(paintTodos);

