import React from "react";
import { connect } from "react-redux";
import { actionCreator } from "../store";
import { Link } from "react-router-dom";

function ToDo({ text, onBtnClick, id }) {
  return (
    <li>
      <Link to={`/${id}`}>
        {text} <button onClick={onBtnClick}>DEL</button>
      </Link>
    </li>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onBtnClick: () => dispatch(actionCreator.deleteTodo(ownProps.id))
  };
};

export default connect(null, mapDispatchToProps)(ToDo);
