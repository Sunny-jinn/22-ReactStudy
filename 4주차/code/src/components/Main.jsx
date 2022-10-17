import { Link, useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <button
        onClick={() => {
          navigate("/hello");
        }}
      >
        fdfdfd
      </button>
      {/* <Link to="/hello">헬로로</Link> */}
      {/* <a href="/hello">헬로로</a> */}
    </div>
  );
}

export default Main;
