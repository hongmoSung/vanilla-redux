const add = document.getElementById("add");
const minus = document.getElementById("minus");
const span = document.querySelector("span");

let count = 0;

span.innerHTML = count;

const updateText = () => {
  span.innerHTML = count;
};

const addHandle = () => {
  count = count + 1;
  updateText();
};

const minusHandle = () => {
  count = count - 1;
  updateText();
};

add.addEventListener("click", addHandle);
minus.addEventListener("click", minusHandle);
