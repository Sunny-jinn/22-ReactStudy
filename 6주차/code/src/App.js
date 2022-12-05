import { useRef, useState } from "react";
import styled from "styled-components";
import "./App.css";

const NameDiv = styled.div`
  font-size: 1rem;
`;

const AgeDiv = styled.div`
  font-size: 0.5rem;
  color: #2c2c2c;
`;

const MajorDiv = styled.div`
  color: #792a2a;
`;

function App(props) {
  return (
    <div className="App">
      <NameDiv fd>김진우</NameDiv>
      <AgeDiv>24</AgeDiv>
      <MajorDiv>컴퓨터공학과</MajorDiv>
    </div>
  );
}

export default App;
