import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreator } from "../store";

function Home({ todo, addToDo }) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>{JSON.stringify(todo)}</ul>
    </>
  );
}

function mapStateToProps(state) {
  return {
    todo: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: text => dispatch(actionCreator.addTodo(text))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
