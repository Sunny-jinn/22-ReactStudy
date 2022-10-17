import React, {
  useState,
  useEffect,
  useReducer,
  useMemo,
  useCallback,
  useRef,
} from "react";

const Callback = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputRef = useRef();

  const getAvg = (numbers) => {
    console.log("평균 계산");
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
  };

  const changeHandler = (e) => {
    setNumber(e.target.value);
  };

  const clickHandler = useCallback(() => {
    setList([...list, parseInt(number)]);
    setNumber("");
  }, []);

  const avg = useMemo(() => getAvg(list), [list]);

  return (
    <div>
      <input value={number} ref={inputRef} onChange={changeHandler} />
      <button onClick={clickHandler}>등록하기</button>
      <div>평균 : {avg}</div>
      <div>
        <ul>
          {list.map((list) => (
            <li>{list}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Callback;
