import React from "react";
import { connect } from "react-redux";
import { actionCreator } from "../store";

function ToDo({ text, onBtnClick }) {
  return (
    <li>
      {text} <button onClick={onBtnClick}>DEL</button>
    </li>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onBtnClick: () => dispatch(actionCreator.deleteTodo(ownProps.id))
  };
};

export default connect(null, mapDispatchToProps)(ToDo);
