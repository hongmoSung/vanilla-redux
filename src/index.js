import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const span = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};
const countStore = createStore(countModifier);

countStore.subscribe(() => {
  span.innerHTML = countStore.getState();
  console.log("there is change on store ");
});

add.addEventListener("click", () => countStore.dispatch({ type: ADD }));
minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }));
