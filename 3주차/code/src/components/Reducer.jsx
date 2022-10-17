import React, { useReducer } from "react";
import { useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCRE":
      return { cnt: state.cnt + 1 };
    case "DECRE":
      return { cnt: state.cnt - 1 };
    default:
      return state;
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    cnt: 0,
  });

  return (
    <div>
      <div>{state.cnt}</div>
      <div>
        <button
          onClick={() => {
            dispatch({ type: "INCRE" });
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            dispatch({ type: "DECRE" });
          }}
        >
          -1
        </button>
      </div>
    </div>
  );
};

export default Reducer;
