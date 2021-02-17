import {createStore} from "redux";

const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const span = document.querySelector("span");

const reducer = (state = 0, action) => {
    console.log(action);
    switch (action.type) {
        case "plus" :
            return state + 1;
        case "minus":
            return  state -1;
        default:
            return state;
    }
};

const store = createStore(reducer);

const setCount = () => {
    span.innerText = store.getState();
}

minus.addEventListener("click", () => {
    store.dispatch({type: "minus"});
    setCount();
});

plus.addEventListener("click", () => {
    store.dispatch({type: "plus"});
    setCount();
});

store.subscribe(() => {
    console.log(store.getState());
});

setCount();