import React from "react";
import { useState } from "react";
import Button from "./Button";

//App
const App = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((prev) => prev + 1);
  };
  const decrease = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <Button name="증가" onClick={increase} />
        <Button name="감소" onClick={decrease} />
      </div>
    </div>
  );
};

export default App;
