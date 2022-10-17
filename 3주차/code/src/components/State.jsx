import React, { useState, useEffect } from "react";

//함수형 컴포넌트
const State = () => {
  const [name, setName] = useState("이름을 입력하세요");
  const count = 0;

  const onChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input onChange={onChange} />
      <div>
        <button>이름 변경</button>
      </div>
      <div>{name}</div>
    </div>
  );
};

export default State;
