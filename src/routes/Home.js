import React, { useState } from "react";
import { connect } from "react-redux";

function Home({ todo }) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
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

export default connect(mapStateToProps)(Home);
