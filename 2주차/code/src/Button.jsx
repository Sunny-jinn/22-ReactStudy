import React from "react";
import "./App.css";

//Button
const Button = (props) => {
  return (
    <button onClick={props.onClick} className="btn">
      {props.name}
    </button>
  );
};

export default Button;
