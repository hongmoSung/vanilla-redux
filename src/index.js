import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const span = document.querySelector("span");

const countModifier = (count = 0, action) => {
  console.log(count);
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};
const countStore = createStore(countModifier);

countStore.subscribe(() => {
  span.innerHTML = countStore.getState();
  console.log("there is change on store ");
});

add.addEventListener("click", () => countStore.dispatch({ type: "ADD" }));
minus.addEventListener("click", () => countStore.dispatch({ type: "MINUS" }));
