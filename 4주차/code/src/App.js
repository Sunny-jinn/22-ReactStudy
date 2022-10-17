import "./App.css";
import { Routes, Route } from "react-router-dom";
import Hello from "./components/Hello";
import Main from "./components/Main";
import Bye from "./components/Bye";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/hello/:tgwing" element={<Bye />} />
      </Routes>
    </div>
  );
}

export default App;
